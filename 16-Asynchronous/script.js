"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
//! Asynchronous code is non-blocking
//! callback functions alone do not make code asynchronous
//! addEventListener alone does not make code asynchronous

//? AJAX = Asynchronous JavaScript And XML
// allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically

//? API = Application Programming Interface
// a piece of software that can be used by another piece of software, in order to allow applications to talk to each other
// we will use "online" APIs (application running on a server that receives requests for data and sends data back as response)
//* building our own "online" API needs us to use node.js & backend development

//? XML data format is no longer used and the data format that is used is JSON

///////////////////////////////////////
// //! Our first AJAX call
// //? old way
// const getCountryData = function(country) {
//     country = country.toLowerCase();
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send(); //? async call

//     request.addEventListener('load', function() {
//         // console.log(this.responseText); //? comes back as JSON
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         const html = `
//             <article class="country">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} Million</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//             </div>
//             </article>
//         `;
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     });
// }
// //? order cannot be guaranteed because it is an async call
// getCountryData('portugal');
// getCountryData('USA');
// getCountryData('GB');
// getCountryData('Germany');
// // https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes
// // https://restcountries.eu/#api-endpoints-name

// //! Welcome to Callback Hell
// //? we can't control the incoming order of the data
// //? we will make a sequence call based on the incoming data

const renderCountry = function (data, className = "") {
	const html = `
        <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} Million</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
        </article>
    `;

	countriesContainer.insertAdjacentHTML("beforeend", html);
	countriesContainer.style.opacity = 1; //? moved to finally
};

// const getCountryAndNeighbor = function(country) {
//     country = country.toLowerCase();
//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send(); //? async call

//     request.addEventListener('load', function() {
//         // console.log(this.responseText); //? comes back as JSON
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         // render country 1
//         renderCountry(data);

//         // Get neighboring country (can only be called after 1st request completes)
//         const [neighbor] = data.borders;

//         if (!neighbor) return;
//         // AJAX call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//         request2.send(); //? async call

//         request2.addEventListener('load', function() {
//             // console.log(this.responseText);
//             const data2 = JSON.parse(this.responseText); //alpha codes are sent back as an object
//             console.log(data2);

//             renderCountry(data2, 'neighbor');
//         });
//     });
// }
// //? order cannot be guaranteed because it is an async call
// getCountryAndNeighbor('portugal');

//? callback hell is when you have many nested asynchronous calls inorder to create a specifc order

// //! Promises and Fetch API
// //? old way
// // const request = new XMLHttpRequest();
// // request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// // request.send(); //? async call

// //? modern API call
// const request = fetch('https://restcountries.eu/rest/v2/name/usa'); // default is GET
// console.log(request);

// //* a promise is a container for a future value (ex: response from AJAX call)
// //* by chaining promises, we escape callback hell
// //? lifecycle of a promise (only settled once)
// // PENDING -> SETTLED (FULFILLED OR REJECTED) ... BUILD PROMISE (fetch api returns promise) -> CONSUME PROMISE

//! Consuming Promise
// const getCountryData = function(country) {
//     // country = country.toLowerCase();
//     //? "then" will handle fulfilled promise
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then(function(response) {
//             // console.log(response);
//             return response.json(); //? json is asynchronous so we need to handle another promise
//         })
//         .then(function(data) {
//             console.log(data);
//             renderCountry(data[0]);
//         });
// };
//? simplified
const renderError = function (msg) {
	countriesContainer.insertAdjacentText("beforeend", msg);
	countriesContainer.style.opacity = 1; //? moved to finally
};

const getCountryData = (country) => {
	fetch(`https://restcountries.eu/rest/v2/name/${country}`)
		.then((response) => {
			console.log(response);

			if (!response.ok) {
				throw new Error(`Country not found (${response.status})`);
			}

			return response.json(); //,
		}) // (err) => alert(err)) //? caught error of failed to fetch
		.then((data) => {
			renderCountry(data[0]);
			const neighbor = data[0].borders[0];

			if (!neighbor) return;

			//! Chaining Promises
			// Country 2
			return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`); // This will be the value that is handled as a promise in the next ".then"
			// DON'T put a then inside another then
		})
		.then((response) => response.json())
		.then((data) => renderCountry(data, "neighbor"))
		.catch((err) => {
			// alert(err);
			console.error(`*** ${err} ***`);
			renderError(`*** ${err.message} ***`);
		}) //? this will catch / handle any errors that come through any of these promises
		.finally(() => {
			//? regardless of "fulfilled" or "rejected", do the following
			console.log("EX: Hide the loading spinner");
			countriesContainer.style.opacity = 1;
		});
};

// getCountryData('Thailand');
// getCountryData('japan');
// getCountryData('usa');
// getCountryData('canada');

// //! Handling Rejected Promises
// //? simulate a internet connection loss
// //? deactivate cache
// //? deactivate network access after page load
// btn.addEventListener("click", function () {
// 	getCountryData("Thailand");
// });

//! Throwing errors manually
//? during the fetch of 'adfhoilkwn' there was a 404 error
//? the promise does not get rejected

// //! The Event Loop Practice
// console.log("Test start");
// setTimeout(() => console.log("0 sec timer"), 0); //? is a callback
// Promise.resolve("Resolved promise 1").then((res) => console.log(res)); //? is a callback but has a promise
// Promise.resolve("Resolved promise 2").then((res) => {
// 	//? with a longer microtask, the setTimeout will take longer to be called
// 	for (let index = 0; index < 10000000; index++) {}
// 	console.log(res);
// });
// console.log("Test end");

// //* the order will be
// //? the top level code
// // Test start
// // Test end
// //? both the setTimeout and the Promise will resolve at the exact same time
// //? since the setTimeout was called first in the code it will be added to the callback queue in first position
// //? but since resolved Promise has priority over the callback then it is added to the Microtasks queue

// //! Building a Simple Promise
// //? Lottery example: Win = fulfilled

// const lotteryPromise = new Promise(function (resolve, reject) {
// 	//? this executor function will contain the async behavior
// 	console.log("Lottery draw is happening");
// 	setTimeout(function () {
// 		if (Math.random() >= 0.5) {
// 			resolve("You WIN"); //? marking the promise resolved
// 		} else {
// 			reject(new Error("you lose"));
// 		}
// 	}, 2000);
// });

// lotteryPromise.then((res) => console.log(res)).catch((err) => console.error(err));

// //? Promisify the old callback function (setTimeout)
// const wait = function (seconds) {
// 	return new Promise(function (resolve) {
// 		// this won't ever fail
// 		setTimeout(resolve, seconds * 1000);
// 	});
// };

// wait(2)
// 	.then(() => {
// 		console.log("I waited for 2 seconds");
// 		return wait(1);
// 	})
// 	.then(() => console.log("I waited for 1 sec"));

// // immediately resolve a promise
// Promise.resolve("abc").then((x) => console.log(x));
// // immediately reject a promise
// Promise.reject("xyz").catch((x) => console.log(x));

// //! Promisify the Geolocation API
// // callback based
// navigator.geolocation.getCurrentPosition(
// 	(position) => console.log(position),
// 	(err) => console.error(err)
// );

// const getPosition = function () {
// 	return new Promise(function (resolve, reject) {
// 		// navigator.geolocation.getCurrentPosition(
// 		// 	(position) => resolve(position),
// 		// 	(err) => reject(err)
// 		// );
// 		//? simplified
// 		navigator.geolocation.getCurrentPosition(resolve, reject);
// 	});
// };

// getPosition().then((pos) => console.log(pos));

// const whereAmI = function () {
// 	getPosition()
// 		.then((pos) => {
// 			const { latitude: lat, longitude: lng } = pos.coords;

// 			return fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
// 		})

// 		// fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
// 		.then((response) => {
// 			if (!response.ok) {
// 				throw new Error(`Please retry (${response.status})`);
// 			}
// 			return response.json();
// 		})
// 		.then((data) => {
// 			console.log(`You are in ${data.city}, ${data.country}`);
// 			return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
// 		})
// 		.then((response) => {
// 			// console.log(response.json());
// 			if (!response.ok) {
// 				throw new Error(`Country not found (${response.status})`);
// 			}
// 			return response.json();
// 		})
// 		.then((data) => renderCountry(data[0]))
// 		.catch((err) => console.log(`** ${err.message} **`));
// 	// // .finally(() => console.log('finally'));
// };

// btn.addEventListener("click", whereAmI);

//! consuming promises with Async & Await
//? we can have this run in the background
//? syntactic sugar to the then with promises

const getPosition = function () {
	return new Promise(function (resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
};

const whereAmI = async function () {
	try {
		const pos = await getPosition();
		const { latitude: lat, longitude: lng } = pos.coords;
		const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
		if (!resGeo.ok) {
			throw new Error(`Problem Getting Location Data`);
		}
		const dataGeo = await resGeo.json();
		// console.log(dataGeo);

		const response = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
		if (!response.ok) {
			throw new Error(`Country not found (${response.status})`);
		}
		// console.log(response);
		const data = await response.json();
		// console.log(data);
		renderCountry(data[0]);

		return `You are in ${dataGeo.city}`;
	} catch (err) {
		// console.log(`${err} ***`);
		renderError(`*** ${err} ***`);

		// reject promise returned from async function
		throw err;
	}

	//? same
	// fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(response));
};

// whereAmI();
// console.log("First?");

//! Error handling with Try... catch (for async await methods)
// try {
// 	let y = 1;
// 	const x = 5;
// 	x = 5;
// } catch (err) {
// 	alert(err.message);
// }

//! Returning Values from Async functions
//? simply returning it won't get us the value, just show us that a promise was initiated
// console.log("1: getting location");
// const city = whereAmI();
// console.log(`2: ${city}`);
// console.log("3: location found");

//? instead we build it out with a then
// console.log("1: getting location");
// whereAmI()
// .then((city) => console.log(`2: ${city}`))
// .catch((err) => console.error(`2: ${err.message}`))
// .finally(() => console.log("3: location found"));

//? make it better
console.log("1: getting location");
(async function () {
	try {
		const city = await whereAmI();
		console.log(`2: ${city}`);
	} catch (err) {
		console.error(`2: ${err.message}`);
	}
	console.log("3: location found");
})();

const getJSON = function (url, errorMsg = "Something went wrong") {
	return fetch(url).then((response) => {
		if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

		return response.json();
	});
};

//! Running promises in parallel
//? run at same time but don't depend on the order
// const get3Countries = async function (c1, c2, c3) {
// 	try {
// 		//? destructuring since we know that the data returning is an array with only one object in it
// 		const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);
// 		const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
// 		const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`);

// 		console.log(data1.capital, data2.capital, data3.capital);
// 	} catch (err) {
// 		console.error(err.message);
// 	}
// };

//? this function really doesn't need to wait on each other bit of information to finish in order to work
//? order doesn't matter here

//? improved
const get3Countries = async function (c1, c2, c3) {
	try {
		//? runs the array of promises and returns 1 promise
		const data = await Promise.all([
			getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
			getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
			getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
		]);
		// data.forEach((element) => console.log(element[0].capital));
		console.log(data.map((d) => d[0].capital));
	} catch (err) {
		console.error(err.message);
	}
};

get3Countries("Portugal", "Canada", "Thailand");

//! Other Promise combinators: Race, allsettled and any
// all receive an array and return 1 promise
//* Promise.race
//? the array races to be complete. first, if fulfilled, will be the fulfilled value of the whole promise
(async function () {
	const res = await Promise.race([
		getJSON(`https://restcountries.eu/rest/v2/name/italy`),
		getJSON(`https://restcountries.eu/rest/v2/name/germany`),
		getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
	]);
	console.log(res[0]);
})();
//? helpful for preventing neverending promise
const timeout = function (sec) {
	return new Promise(function (_, reject) {
		setTimeout(function () {
			reject(new Error("Request took too long!"));
		}, sec * 1000);
	});
};

Promise.race([getJSON("https://restcountries.eu/rest/v2/name/china"), timeout(0.01)])
	.then((res) => console.log(res[0]))
	.catch((err) => console.error(err));

//? Promise.allSettled
// takes an array and returns all the results of all the promises (never short circuits)
Promise.allSettled([Promise.resolve("Success"), Promise.reject("ERROR"), Promise.resolve("Another Success")]).then(
	(res) => console.log(res)
);
// VS
Promise.all([Promise.resolve("Success"), Promise.reject("ERROR"), Promise.resolve("Another Success")])
	.then((res) => console.log(res))
	.catch((err) => console.error(err));

//? Promise.any [ES2021]
// takes an array and returns the first fulfilled promise (if one fulfilled)
Promise.any([Promise.resolve("Success"), Promise.reject("ERROR"), Promise.resolve("Another Success")])
	.then((res) => console.log(res))
	.catch((err) => console.error(err));
