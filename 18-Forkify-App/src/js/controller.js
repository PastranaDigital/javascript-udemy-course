//! Application Logic

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SECONDS } from './config.js';

//? helps make sure that most old browsers are supported
import 'core-js/stable'; // Polyfilling everything else
import 'regenerator-runtime/runtime'; // Polyfilling Async/Await
import { async } from 'regenerator-runtime';

//? Parcel: activate the hot module reloading
//? we can make edits and save but the whole page won't refresh and make us lose our place
if (module.hot) {
	module.hot.accept();
}

const controlRecipes = async function () {
	try {
		//? Get the recipe Id
		const id = window.location.hash.slice(1);

		if (!id) return; // guard clause
		recipeView.renderSpinner();

		//? 0. Update results view to mark the selected search result (using update algorithm)
		resultsView.update(model.getSearchResultsPage());
		bookmarksView.update(model.state.bookmarks);

		//? 1. loading recipe
		//? an async function so it will return a promise
		//? after this we will have access to the model.state.recipe
		await model.loadRecipe(id);

		//? 2. Rendering recipe
		recipeView.render(model.state.recipe);
	} catch (err) {
		recipeView.renderError();
	}
};

const controlSearchResults = async function () {
	try {
		// resultsView.renderSpinner();

		//? 1. Get search query
		const query = searchView.getQuery();
		if (!query) return;

		//? 2. Load search results
		await model.loadSearchResults(query);

		//? 3. Render results
		// resultsView.render(model.state.search.results); //? rendered all the results
		resultsView.render(model.getSearchResultsPage());

		//? 4. Render initial pagination buttons
		paginationView.render(model.state.search);
	} catch (err) {
		console.log(err);
	}
};

const controlCLick = function (goToPage) {
	//? 1. Render more results
	resultsView.render(model.getSearchResultsPage(goToPage));
	//? 2. Render NEW pagination buttons
	paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
	//? Update the recipe servings (in the state)
	model.updateServings(newServings);
	//? Update the recipeView
	recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
	//? 1. add or delete bookmark
	if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
	else model.deleteBookmark(model.state.recipe.id);
	// console.log(model.state.recipe);
	//? 2. update recipe view
	recipeView.update(model.state.recipe);
	//? 3. render bookmarks
	bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
	bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
	try {
		//? Render a loading spinner before trying to add data
		addRecipeView.renderSpinner();

		//? upload data through model
		//? await since the upload is async
		await model.uploadRecipe(newRecipe);
		// console.log(model.state.recipe);

		//? Render newly uploaded recipe
		recipeView.render(model.state.recipe);

		//? Render Success Message
		addRecipeView.renderMessage();

		//? Close the modal
		setTimeout(function (params) {
			addRecipeView.toggleWindow();
		}, MODAL_CLOSE_SECONDS * 1000);
	} catch (error) {
		console.error(error);
		addRecipeView.renderError(error.message);
	}
};

const init = function () {
	bookmarksView.addHandlerRender(controlBookmarks);
	recipeView.addHandlerRender(controlRecipes);
	recipeView.addHandlerUpdateServings(controlServings);
	recipeView.addHandlerAddBookmark(controlAddBookmark);
	searchView.addHandlerSearch(controlSearchResults);
	paginationView.addHandlerClick(controlCLick);
	addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
