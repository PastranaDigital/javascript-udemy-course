//! Business Logic
//! State
//! HTTP Library

import { async } from 'regenerator-runtime';
import { API_URL, RESULTS_PER_PAGE, KEY } from './config.js';
// import { getJSON, sendJSON } from './helper.js';
import { AJAX } from './helper.js';

export const state = {
	recipe: {},
	search: {
		query: '',
		results: [],
		resultsPerPage: RESULTS_PER_PAGE,
		page: 1,
	},
	bookmarks: [],
};

const createRecipeObject = function (data) {
	//? reformatting the object to have better property names
	const { recipe } = data.data;
	return {
		id: recipe.id,
		title: recipe.title,
		publisher: recipe.publisher,
		sourceUrl: recipe.source_url,
		image: recipe.image_url,
		servings: recipe.servings,
		cookingTime: recipe.cooking_time,
		ingredients: recipe.ingredients,
		//! conditionally add properties trick
		//? if recipe.key is falsey then the && shortcircuits and nothing is stored
		//? otherwise, spread this {key : recipe.key} to add to recipe object
		...(recipe.key && { key: recipe.key }),
	};
};

//* will not return anything
//* will only change our state object
export const loadRecipe = async function (id) {
	try {
		const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
		state.recipe = createRecipeObject(data);

		state.bookmarks.some((bookmark) => bookmark.id === id)
			? (state.recipe.bookmarked = true)
			: (state.recipe.bookmarked = false);
	} catch (err) {
		//? Temp error handling
		console.error(`*** ${err} ***`);
		//? so the controller can handle it
		throw err;
	}
};

export const loadSearchResults = async function (query) {
	try {
		state.search.query = query;

		const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

		state.search.results = data.data.recipes.map((rec) => {
			return {
				id: rec.id,
				title: rec.title,
				publisher: rec.publisher,
				image: rec.image_url,
				...(rec.key && { key: rec.key }),
			};
		});

		//? reset the page results to start at page 1
		state.search.page = 1;
	} catch (err) {
		//? Temp error handling
		console.error(`*** ${err} ***`);
		//? so the controller can handle it
		throw err;
	}
};

//? not async since we will already have the data
//? pagination
export const getSearchResultsPage = function (page = state.search.page) {
	state.search.page = page;
	const start = (page - 1) * state.search.resultsPerPage; //? 0
	const end = page * state.search.resultsPerPage; //? 10
	// console.log(`Page #${page}`);

	return state.search.results.slice(start, end); //? slice doesn't include the end value
};

export const updateServings = function (newServings) {
	state.recipe.ingredients.forEach((ing) => (ing.quantity = (ing.quantity * newServings) / state.recipe.servings));
	state.recipe.servings = newServings;
};

const persistBookmarks = function () {
	localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
	//? add bookmark
	state.bookmarks.push(recipe);

	//? mark current recipe as bookmark
	if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

	persistBookmarks();
};

export const deleteBookmark = function (id) {
	//? find bookmark
	const index = state.bookmarks.findIndex((el) => el.id === id);

	//? delete bookmark
	state.bookmarks.splice(index, 1);

	//? mark current recipe as NOT bookmarked
	if (id === state.recipe.id) state.recipe.bookmarked = false;

	persistBookmarks();
};

const init = function () {
	const storage = localStorage.getItem('bookmarks');
	if (storage) state.bookmarks = JSON.parse(storage);
};
init();

//? used for development
const clearBookmarks = function () {
	localStorage.clear('bookmarks');
};
// clearBookmarks();

export const uploadRecipe = async function (newRecipe) {
	try {
		const ingredients = Object.entries(newRecipe)
			.filter((entry) => entry[0].startsWith('ingredient') && entry[1] !== '')
			.map((ing) => {
				const ingArray = ing[1].split(',').map((el) => el.trim()); //? fixes bug when doing a replace of spaces
				//? validate format
				if (ingArray.length !== 3) throw new Error('Wrong ingredient format. Please use the correct format.');
				const [quantity, unit, description] = ingArray;
				return { quantity: quantity ? +quantity : null, unit, description };
			});
		// console.log(ingredients);

		//! His solution
		// const ingredients = Object.entries(newRecipe)
		// 	.filter((entry) => entry[0].startsWith('ingredient') && entry[1] !== '')
		// 	.map((ing) => {
		// 		const [quantity, unit, description] = ing[1].replaceAll(' ', '').split(',');
		// 		return { quantity: quantity ? +quantity : null, unit, description };
		// 	});
		// console.log(ingredients);

		//? My attempt at doing this as a challenge
		// console.log('newRecipe', newRecipe);
		// let iterator = 1;
		// const ingArray = [];
		// for (const [key, value] of Object.entries(newRecipe)) {
		// 	if (iterator > 6) {
		// 		if (!value) break;
		// 		console.log('value', value);
		// 		let tempObj = {};
		// 		const valSplit = value.split(',');
		// 		tempObj.quantity = valSplit[0];
		// 		tempObj.unit = valSplit[1];
		// 		tempObj.description = valSplit[2];
		// 		ingArray.push(tempObj);
		// 	}
		// 	iterator++;
		// }
		// console.log('ingArray', ingArray);

		const recipe = {
			title: newRecipe.title,
			source_url: newRecipe.sourceUrl,
			image_url: newRecipe.image,
			publisher: newRecipe.publisher,
			cooking_time: +newRecipe.cookingTime,
			servings: +newRecipe.servings,
			ingredients,
		};
		console.log(recipe);
		//? 7833026a-d698-40d4-ab61-06372f7e1a3f
		const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
		state.recipe = createRecipeObject(data);
		addBookmark(state.recipe);
	} catch (error) {
		throw error;
	}
};
