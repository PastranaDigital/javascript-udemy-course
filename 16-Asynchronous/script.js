'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

const renderCountry = function(data, className = ''){
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
        
    countriesContainer.insertAdjacentHTML('beforeend', html);
    // countriesContainer.style.opacity = 1; //? moved to finally
}

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
const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1; //? moved to finally
}

const getCountryData = (country) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then((response) => {
            console.log(response);
            
            if(!response.ok) {
                throw new Error(`Country not found (${response.status})`);
            }

            return response.json() //, 
        })// (err) => alert(err)) //? caught error of failed to fetch
        .then((data) => {
            renderCountry(data[0]);
            const neighbor = data[0].borders[0];

            if(!neighbor) return;
            
            //! Chaining Promises
            // Country 2
            return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`); // This will be the value that is handled as a promise in the next ".then"
            // DON'T put a then inside another then
        })
        .then(
            (response) => response.json())
        .then((data) => renderCountry(data, 'neighbor'))
        .catch(err => {
            // alert(err);
            console.error(`*** ${err} ***`);
            renderError(`*** ${err.message} ***`);
        }) //? this will catch / handle any errors that come through any of these promises
        .finally(() => { //? regardless of "fulfilled" or "rejected", do the following
            console.log('EX: Hide the loading spinner');
            countriesContainer.style.opacity = 1;
        })
};

// getCountryData('Thailand');
// getCountryData('japan');
// getCountryData('usa');
// getCountryData('canada');

//! Handling Rejected Promises
//? simulate a internet connection loss
//? deactivate cache
//? deactivate network access after page load
btn.addEventListener('click', function() {
    getCountryData('Thailand');
});

//! Throwing errors manually
//? during the fetch of 'adfhoilkwn' there was a 404 error
//? the promise does not get rejected
