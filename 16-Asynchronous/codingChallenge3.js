"use strict";

console.log("------------------------------------------------------------");
console.log("CODING CHALLENGE 3");
console.log("------------------------------------------------------------");

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

// //? Part 1
// const loadNPause = async function (img1, img2) {
// 	let currentImg;
// 	try {
// 		const data = await Promise.all([createImage(img1), wait(2), createImage(img2), wait(2)]);
// 		console.log(data);
// 		data.map((d) => (currentImg = d[0]));
// 		// currentImg = data[0];
// 		// currentImg.style.display = "none";
// 	} catch (err) {
// 		console.error(err.message);
// 	}
// };

// loadNPause("img/img-1.jpg", "img/img-2.jpg");

// //? Part 2
// const loadAll = async function (imgArr) {
// 	try {
// 		imgArr.map;
// 	} catch (error) {
// 		console.error(error.message);
// 	}
// };

// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img3.jpg']);

//! Part 1 solution

let currentImg;

// createImage("img/img-1.jpg")
// 	.then((img) => {
// 		currentImg = img;
// 		console.log("Image 1 loaded");
// 		return wait(2);
// 	})
// 	.then(() => {
// 		currentImg.style.display = "none";
// 		return createImage("img/img-2.jpg");
// 	})
// 	.then((img) => {
// 		currentImg = img;
// 		console.log("Image 2 loaded");
// 		return wait(2);
// 	})
// 	.then(() => {
// 		currentImg.style.display = "none";
// 	})
// 	.catch((err) => console.error(err));

const loadNPause = async function () {
	try {
		// load image 1
		let img = await createImage("img/img-1.jpg");
		console.log("Image 1 loaded");
		await wait(2);
		img.style.display = "none";

		// load image 2
		img = await createImage("img/img-2.jpg");
		console.log("Image 2 loaded");
		await wait(2);
		img.style.display = "none";
	} catch (err) {
		console.error(err);
	}
};

// loadNPause();

//! Part 2 solution

const loadAll = async function (imgArray) {
	try {
		const imgs = imgArray.map(async (img) => await createImage(img));
		console.log(imgs); // an array of promises
		const imgsEl = await Promise.all(imgs);
		console.log(imgsEl); // separates them
		imgsEl.forEach((img) => {
			img.classList.add("parallel");
		});
	} catch (err) {
		console.error(err);
	}
};

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
