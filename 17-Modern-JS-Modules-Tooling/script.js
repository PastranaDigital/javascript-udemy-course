// //! Exporting and Importing in ES6

// //? can import using 'as' to rename
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

// // importing module
// console.log("importing module");

// addToCart("bread", 5);
// console.log(price, tq);

// //? can import everything from a module
// // creates an object of imported goods (Similar to Classes)
// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("beans", 10);

// //? importing & naming of a default export
// import add from "./shoppingCart.js";
// add("cheese", 5);

// //? there is a live connection from import to export (not a copy)
// import { addToCart, totalPrice as price, tq, cart } from "./shoppingCart.js";
// addToCart("bread", 5);
// addToCart("cheese", 2);
// addToCart("apples", 7);

// console.log(cart);

// //! The Module Pattern (before ES6)

// //? all this is trapped inside this iffy function. we can return some of it to get it out via api
// //? works because of closures
// const ShoppingCart2 = (function () {
// 	const cart = [];
// 	const shippingCost = 10;
// 	const totalPrice = 237;
// 	const totalQuantity = 23;

// 	const addToCart = function (product, quantity) {
// 		cart.push({ product, quantity });
// 		console.log(`${quantity} ${product} added to cart`);
// 	};

// 	const orderStock = function (product, quantity) {
// 		console.log(`${quantity} ${product} ordered from supplier`);
// 	};

// 	return {
// 		addToCart,
// 		cart,
// 		totalPrice,
// 		totalQuantity,
// 	};
// })();

// ShoppingCart2.addToCart("apples", 5);

// //! CommonJs Modules
// //? another option between old and ES6
