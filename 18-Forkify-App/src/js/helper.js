//! All commonly used functions
import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
	return new Promise(function (_, reject) {
		setTimeout(function () {
			reject(new Error(`Request took too long! Timeout after ${s} second`));
		}, s * 1000);
	});
};

//? refactored to handle both get and send
export const AJAX = async function (url, uploadData = undefined) {
	try {
		const fetchPro = uploadData
			? fetch(url, {
					//? send JSON
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(uploadData),
			  })
			: fetch(url); //? get JSON
		const response = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
		//? Forkify API will send back to us the data we sent
		const data = await response.json();

		if (!response.ok) throw new Error(`${data.message} (${response.status})`);
		return data;
	} catch (err) {
		//? error will be handled in the model.js
		throw err;
	}
};

/*
export const getJSON = async function (url) {
	try {
		const fetchPro = fetch(url);
		const response = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
		const data = await response.json();

		if (!response.ok) throw new Error(`${data.message} (${response.status})`);
		return data;
	} catch (err) {
		//? error will be handled in the model.js
		throw err;
	}
};

export const sendJSON = async function (url, uploadData) {
	try {
		const fetchPro = fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(uploadData),
		});

		const response = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
		//? Forkify API will send back to us the data we sent
		const data = await response.json();

		if (!response.ok) throw new Error(`${data.message} (${response.status})`);
		return data;
	} catch (err) {
		//? error will be handled in the model.js
		throw err;
	}
};
*/
