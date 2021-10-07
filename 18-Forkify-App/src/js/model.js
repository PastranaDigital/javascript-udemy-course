//! Business Logic
//! State
//! HTTP Library

import { async } from 'regenerator-runtime';
import { API_URL, RESULTS_PER_PAGE } from './config.js';
import { getJSON } from './helper.js';

export const state = {
	recipe: {},
	search: {
		query: '',
		results: [],
		resultsPerPage: RESULTS_PER_PAGE,
		page: 1,
	},
};

//* will not return anything
//* will only change our state object
export const loadRecipe = async function (id) {
	try {
		const data = await getJSON(`${API_URL}${id}`);

		const { recipe } = data.data;
		//? reformatting the object to have better property names
		state.recipe = {
			id: recipe.id,
			title: recipe.title,
			publisher: recipe.publisher,
			sourceUrl: recipe.source_url,
			image: recipe.image_url,
			servings: recipe.servings,
			cookingTime: recipe.cooking_time,
			ingredients: recipe.ingredients,
		};
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

		const data = await getJSON(`${API_URL}?search=${query}`);

		state.search.results = data.data.recipes.map((rec) => {
			return {
				id: rec.id,
				title: rec.title,
				publisher: rec.publisher,
				image: rec.image_url,
			};
		});
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
	console.log(`Page #${page}`);

	return state.search.results.slice(start, end); //? slice doesn't include the end value
};

export const updateServings = function (newServings) {
	state.recipe.ingredients.forEach((ing) => (ing.quantity = (ing.quantity * newServings) / state.recipe.servings));
	state.recipe.servings = newServings;
};
