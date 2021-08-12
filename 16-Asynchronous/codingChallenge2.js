"use strict";

// console.log("------------------------------------------------------------");
// console.log("CODING CHALLENGE 2");
// console.log("------------------------------------------------------------");

//! I struggled to grasp this so watched and noted

// const createImage = function(path) {
//     return new Promise((resolve, reject) => {
//         if (success) {
//             resolve(image element itself)
//         } else {
//             reject(error event)
//         }

//         document.createElement(img, )
//         src = path
//         addEventListener('load', addToDOMwithImagesClass)
//     })
// }

// const loadImage = createImage().then(res => )

//! solution
const imgContainer = document.querySelector(".images");

const wait = function (seconds) {
	return new Promise(function (resolve) {
		// this won't ever fail
		setTimeout(resolve, seconds * 1000);
	});
};

const createImage = function (imgPath) {
	return new Promise(function (resolve, reject) {
		const img = document.createElement("img");
		img.src = imgPath;

		img.addEventListener("load", function () {
			imgContainer.append(img);
			resolve(img);
		});

		img.addEventListener("error", function () {
			reject(new Error("Image not found"));
		});
	});
};

let currentImg;

createImage("img/img-1.jpg")
	.then((img) => {
		currentImg = img;
		console.log("Image 1 loaded");
		return wait(2);
	})
	.then(() => {
		currentImg.style.display = "none";
		return createImage("img/img-2.jpg");
	})
	.then((img) => {
		currentImg = img;
		console.log("Image 2 loaded");
		return wait(2);
	})
	.then(() => {
		currentImg.style.display = "none";
	})
	.catch((err) => console.error(err));
