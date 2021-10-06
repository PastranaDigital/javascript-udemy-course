//! Application Logic

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

// helps make sure that most old browsers are supported
import 'core-js/stable'; // Polyfilling everything else
import 'regenerator-runtime/runtime'; // Polyfilling Async/Await
import { async } from 'regenerator-runtime';

// Parcel: activate the hot module reloading
// we can make edits and save but the whole page won't refresh and make us lose our place
if (module.hot) {
	module.hot.accept();
}

const controlRecipes = async function () {
	try {
		// Get the recipe Id
		const id = window.location.hash.slice(1);

		if (!id) return; // guard clause
		recipeView.renderSpinner();

		// 1. loading recipe
		// an async function so it will return a promise
		// after this we will have access to the model.state.recipe
		await model.loadRecipe(id);

		// 2. Rendering recipe
		recipeView.render(model.state.recipe);
	} catch (err) {
		recipeView.renderError();
	}
};

const controlSearchResults = async function () {
	try {
		// resultsView.renderSpinner();

		// 1. Get search query
		const query = searchView.getQuery();
		if (!query) return;

		// 2. Load search results
		await model.loadSearchResults(query);

		// 3. Render results
		resultsView.render(model.state.search.results);
	} catch (err) {
		console.log(err);
	}
};

const init = function () {
	recipeView.addHandlerRender(controlRecipes);
	searchView.addHandlerSearch(controlSearchResults);
};
init();
