// exporting module
console.log("exporting module");

//? private variables (not seen in other modules)
const shippingCost = 10;
export const cart = [];

//? exporting a function (must be done in top level code)
export const addToCart = function (product, quantity) {
	cart.push({ product, quantity });
	console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

//? export using named exports
export { totalPrice, totalQuantity as tq };

//? default exports are used when we want to only export 1 thing per module
//? no name is given to it
export default function (product, quantity) {
	cart.push({ product, quantity });
	console.log(`${quantity} ${product} added to cart`);
}
