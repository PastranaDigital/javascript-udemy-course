//! Business Logic
//! State
//! HTTP Library

import { async } from "regenerator-runtime";
import { API_URL } from "./config.js";
import { getJSON } from "./helper.js";

export const state = {
	recipe: {},
	search: {
		query: "",
		results: [],
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
		// Temp error handling
		console.error(`*** ${err} ***`);
		// so the controller can handle it
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
		// Temp error handling
		console.error(`*** ${err} ***`);
		// so the controller can handle it
		throw err;
	}
};
