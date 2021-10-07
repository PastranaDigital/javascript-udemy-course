"use strict";

// element selection
//////////////////////////////////////////////////////////////////////

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const allSections = document.querySelectorAll(".section");
const imgTargets = document.querySelectorAll("img[data-src]");

const openModal = function (event) {
	event.preventDefault(); // the page will not jump up when link is clicked
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

// event listeners
//////////////////////////////////////////////////////////////////////

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
	if (e.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});

btnScrollTo.addEventListener("click", function (e) {
	const s1coordinates = section1.getBoundingClientRect();
	section1.scrollIntoView({ behavior: "smooth" });
});

// page navigation
//////////////////////////////////////////////////////////////////////

//? nav smooth scrolling
document.querySelector(".nav__links").addEventListener("click", function (event) {
	event.preventDefault(); // we will write our own process and use smooth scrolling
	if (event.target.classList.contains("nav__link")) {
		const id = event.target.getAttribute("href");
		document.querySelector(id).scrollIntoView({ behavior: "smooth" }); // Must put id of the element as the href in the link & name the section with the corresponding id
	}
});

//? tabbed component
tabsContainer.addEventListener("click", function (event) {
	const clicked = event.target.closest(".operations__tab");
	if (!clicked) return; // modern way guard clause
	tabs.forEach((tab) => tab.classList.remove("operations__tab--active")); // remove from all tabs first
	clicked.classList.add("operations__tab--active");
	tabsContent.forEach((content) => content.classList.remove("operations__content--active")); // remove from all content first
	document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active");
});

//? navbar hover
const handleHover = function (e) {
	if (e.target.classList.contains("nav__link")) {
		const link = e.target;
		const siblings = link.closest(".nav").querySelectorAll(".nav__link");
		const logo = link.closest(".nav").querySelector("img");

		siblings.forEach((element) => {
			if (element !== link) element.style.opacity = this;
		});
		logo.style.opacity = this;
	}
};
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

//? sticky navbar
const stickyNav = function (entries) {
	const [entry] = entries;
	if (!entry.isIntersecting) nav.classList.add("sticky");
	else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, { root: null, threshold: 0, rootMargin: `-${navHeight}px` });
headerObserver.observe(header);

//? revealing sections on scroll
const revealSection = function (entries, observer) {
	const [entry] = entries;
	if (!entry.isIntersecting) return;
	entry.target.classList.remove("section--hidden");
	observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, { root: null, threshold: 0.15 });
allSections.forEach(function (section) {
	sectionObserver.observe(section);
	section.classList.add("section--hidden");
});

//? reveal lazy loading images
const loadImg = function (entries, observer) {
	const [entry] = entries;
	if (!entry.isIntersecting) return;
	entry.target.src = entry.target.dataset.src;
	entry.target.addEventListener("load", () => entry.target.classList.remove("lazy-img"));
	observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, { root: null, threshold: 0, rootMargin: "200px" });
imgTargets.forEach((img) => imgObserver.observe(img));

// lectures
//////////////////////////////////////////////////////////////////////

// //! Select, create and deleting elements
// //? selecting elements
// console.log(document.documentElement); // whole document
// console.log(document.head); // head tag
// console.log(document.body); // body tag

// const header = document.querySelector('.header'); // first with this tag
// const allSections = document.querySelectorAll('.section'); // prints out a Node List (like an array but not entirely)
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button'); // prints out a live list of buttons
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn')); // prints out a live list too

// //? creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // prepend is the first child of the header element
// header.append(message); // this is a live element so it can only be in one place
// header.append(message.cloneNode(true)); // put it in both places

// header.before(message);
// header.after(message);

// //? Delete Elements
// document.querySelector('.btn--close-cookie').addEventListener('click', () => message.remove());
// // old way of message.remove();
// // message.parentElement.removeChild(message);

// //! Styles, attributes and classes
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color); // we can't see this because we didn't set it, it is in stylesheet
// console.log(getComputedStyle(message).color); // what it is on the browser
// console.log(message.style.backgroundColor); // can see since we set it

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// //? change the CSS variable value
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //? Attributes
// //* standard properties on elements
// const logo = document.querySelector('.nav__logo');
// console.log(logo.src); // absolute
// console.log(logo.getAttribute('src')); // relative

// console.log(logo.alt);
// logo.alt = 'Beautiful minimalist logo';
// console.log(logo.alt);

// // Non-standard attributes
// console.log(logo.designer); // won't work
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //? Data attributes
// console.log(logo.dataset.versionNumber); // in HTML : data-version-number

// //? classes
// logo.classList.add('a','b','c');
// logo.classList.remove('a');
// logo.classList.toggle('a');
// logo.classList.contains('a'); // not called includes, like in arrays, easy to mess up

// //? Don't use THIS WILL OVERWRITE EXISTING CLASSES
// logo.className = 'Jonas';

// //! Smooth scroll

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   e.preventDefault();
//   const s1coordinates = section1.getBoundingClientRect();
//   // console.log(s1coordinates);

//   // //? extra information about scrolling and window
//   // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
//   // console.log(
//   //   'height/width viewport',
//   //   document.documentElement.clientHeight,
//   //   document.documentElement.clientWidth
//   // );

//   //? scrolling
//   //? current position + current scroll
//   // window.scrollTo(s1coordinates.left + window.pageXOffset, s1coordinates.top + window.pageYOffset); //window.pageYOffset gives us the relative distance to the document

//   //? old way but better than above
//   // window.scrollTo({
//   //   left: s1coordinates.left + window.pageXOffset,
//   //   top: s1coordinates.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   //? modern browsers!!!
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// //? https://developer.mozilla.org/en-US/docs/Web/Events
// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('you are reading the heading');
//   //? best place for removeEventListener
//   // h1.removeEventListener('mouseenter', alertH1); // prevents it from happening again
// };

// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); // prevents it from happening 3 seconds after load time

// //? old way of doing it
// // h1.onmouseenter = function (e) {
// //   alert('you are reading the heading version 2');
// // };

// //! Event bubbling and propogation
// //? Random Color Generator
// //rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());
// //? one link
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // STOP bubbling up (propogation)
//   //? in general, not a good idea
//   e.stopPropagation();
// });
// //? parent of all links
// //? event is handled at the child but also bubbles up to parent (nav__links)
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });
// //? parent of the nav bar
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });
// // }, true); // this captures at the beginning and is activated first (RARELY USED)

// //! Event Delegation
// // //? inefficient way if there are many links, instead use event delegation
// // document.querySelectorAll('.nav__link').forEach(nav =>
// //   nav.addEventListener('click', function (event) {
// //     event.preventDefault(); // we will write our own process and use smooth scrolling
// //     const id = this.getAttribute('href');
// //     console.log(id);
// //     document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); // Must put id of the element as the href in the link & name the section with the corresponding id
// //   })
// // );

// //? Event delegation
// // 1. add event listener to common parent element
// // 2. Determine what element originated the event (match only desired clicks)
// document
//   .querySelector('.nav__links')
//   .addEventListener('click', function (event) {
//     // console.log(event.target);
//     event.preventDefault(); // we will write our own process and use smooth scrolling
//     //? matching strategy (often hardest part)
//     if (event.target.classList.contains('nav__link')) {
//       // console.log('Link');
//       const id = event.target.getAttribute('href');
//       // console.log(id);
//       document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); // Must put id of the element as the href in the link & name the section with the corresponding id
//     }
//   });

// //! DOM traversing
// const h1 = document.querySelector('h1');

// //? going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children); // live collection (only for direct children)
// h1.firstElementChild.style.color = 'blue';
// h1.lastElementChild.style.color = 'red';

// //? going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// //? searching for the nearest parent, no matter the distance
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// //? going sideways: siblings
// // can only select the adjacent ones
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// //? need all the siblings?
// // jump up to the parent then select all from there
// console.log(h1.parentElement.children);
// // affect all the children except the original (h1)
// [...h1.parentElement.children].forEach(function (element) {
//   if (element !== h1) element.style.transform = 'scale(0.5)';
// });

// //! Build a tabbed component
// //? in HTML operations -> operations__tab -> operations__content--# (data-tab)
// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

// //? Use event delegation
// tabsContainer.addEventListener('click', function (event) {
//   // const clicked = event.target; // can show both the button and the internal span when you click on it
//   const clicked = event.target.closest('.operations__tab');
//   console.log(clicked);
//   // need to ignore any clicks that happen in the tab container parent element only
//   // Guard clause
//   if (!clicked) return; // modern way of the below
//   // if (clicked) then do this code

//   tabs.forEach(tab => tab.classList.remove('operations__tab--active')); // remove from all tabs first
//   clicked.classList.add('operations__tab--active');

//   // activate content area
//   console.log(clicked.dataset.tab);
//   tabsContent.forEach(content =>
//     content.classList.remove('operations__content--active')
//   ); // remove from all content first
//   document
//     .querySelector(`.operations__content--${clicked.dataset.tab}`)
//     .classList.add('operations__content--active');
// });

// //! Passing Arguments to Event Handlers
// //? Menu fade animation (for nav bar)
// const nav = document.querySelector('.nav');

// const handleHover = function (e) {
//   if(e.target.classList.contains('nav__link')) { // No other child elements so no need for closest
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link'); // finding the parent a few steps up
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(element => {
//       if (element !== link) element.style.opacity = this;
//     });
//     logo.style.opacity = this;
//   }
// }
// // //? option 1
// // nav.addEventListener('mouseover', (e) => handleHover(e, 0.5));
// // nav.addEventListener('mouseout', (e) => handleHover(e, 1));
// //? option 2
// // passing "argument" into handler
// nav.addEventListener('mouseover', handleHover.bind(0.5)); // .bind creates new function
// nav.addEventListener('mouseout', handleHover.bind(1));

// //! Sticky navigation Scroll Event
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// //? old way
// window.addEventListener('scroll', function (e) { //everytime we scroll, this is fired
//   console.log(window.scrollY);

//   // activate sticky class once it reaches desired position
//   if(this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// })

// //? new way
// const obsCallback = function(entries, observer) { // will be called each time the "observed element" the target element is intersecting the root element at the threshold we defined
//   // enteries = array of threshold entries
//   entries.forEach((entry) => {
//       console.log(entry); // less than threshold = isIntersecting: false
//   });
// };
// const obsOptions = {
//   root: null, // element the target is intersecting (null = viewport)
//   // threshold: 0.1, // percentage of section that is visible
//   threshold: [0, 0.2], // percentage of section that is visible
// };

// // const observer = new IntersectionObserver(obsCallback, obsOptions);
// // observer.observe(section1);

// const header = document.querySelector('.header');
// const navHeight = nav.getBoundingClientRect().height;
// const stickyNav = function (entries) {
//   const [entry] = entries; // grabbing first one
//   console.log(entry);
//   if(!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// }
// // const headerObserver = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: '-90px'});
// const headerObserver = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: `-${navHeight}px`}); // getting the height dynamically

// headerObserver.observe(header);

// //! revealing elements on scroll
// // reveal each section as we approach it (animation is done in css)
// const allSections = document.querySelectorAll('.section');

// const revealSection = function(entries, observer) {
//   const [entry] = entries;
//   console.log(entry);
//   if(!entry.isIntersecting) return;
//   entry.target.classList.remove('section--hidden');
//   observer.unobserve(entry.target);
// }

// const sectionObserver = new IntersectionObserver(revealSection, {root: null, threshold: 0.15})

// allSections.forEach(function(section) {
//   sectionObserver.observe(section);
//   section.classList.add('section--hidden'); // set all to hidden at first
// })

// //! lazy loading images
// // on load, a low res image is sent in and a css filter applied
// // the img html has a custom attribute "data-src" where the full res image is
// const imgTargets = document.querySelectorAll('img[data-src]');

// const loadImg = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);

//   if(!entry.isIntersecting) return;
//   entry.target.src = entry.target.dataset.src;
//   // entry.target.classList.remove('lazy--img'); // won't work well because the image needs to load fully
//   entry.target.addEventListener('load', function() {
//     entry.target.classList.remove('lazy-img');
//   });

//   observer.unobserve(entry.target);
// };

// const imgObserver = new IntersectionObserver(loadImg, {root: null, threshold: 0, rootMargin: '200px'}); // using the rootMargin to hid that we are lazy loading images from the site user

// imgTargets.forEach(img => imgObserver.observe(img));

//! Building a slider component Part 1
// adapt the percentages to translate X
// overflow: hidden is truned off to reveal this
const slider = function () {
	const slides = document.querySelectorAll(".slide");
	const btnLeft = document.querySelector(".slider__btn--left");
	const btnRight = document.querySelector(".slider__btn--right");
	const dotContainer = document.querySelector(".dots");

	let currentSlide = 0;
	const maxSlide = slides.length - 1; // to make zero based too

	//? used for debugging and building
	// const slider = document.querySelector('.slider');
	// slider.style.transform = 'scale(0.4) translateX(-800px)';
	// slider.style.overflow = 'visible';

	const createDots = function () {
		slides.forEach((_, i) => {
			dotContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`);
		});
	};

	// functions
	const activateDot = function (slide) {
		// select all dots
		document.querySelectorAll(".dots__dot").forEach((dot) => dot.classList.remove("dots__dot--active"));
		// select the specific dot
		document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
	};

	const goToSlide = function (slide) {
		slides.forEach((s, index) => (s.style.transform = `translateX(${100 * (index - slide)}%)`));
	};

	const nextSlide = function () {
		currentSlide === maxSlide ? (currentSlide = 0) : currentSlide++;
		goToSlide(currentSlide);
		activateDot(currentSlide);
	};

	const prevSlide = function () {
		currentSlide === 0 ? (currentSlide = maxSlide) : currentSlide--;
		goToSlide(currentSlide);
		activateDot(currentSlide);
	};

	const init = () => {
		createDots();
		goToSlide(0);
		activateDot(0);
	};
	init();

	// next slide
	btnRight.addEventListener("click", nextSlide);
	btnLeft.addEventListener("click", prevSlide);

	//! Building a slider component Part 2
	// using the arrow keys for navigation

	document.addEventListener("keydown", function (e) {
		// console.log(e);
		if (e.key === "ArrowLeft") prevSlide();
		e.key === "ArrowRight" && nextSlide(); // two options for doing this (this one is short circuiting)
	});

	dotContainer.addEventListener("click", function (e) {
		if (e.target.classList.contains("dots__dot")) {
			// const slide = e.target.dataset.slide;
			const { slide } = e.target.dataset; // using destructuring to get it
			goToSlide(slide);
			activateDot(slide);
			console.log("no");
		}
	});
};
//? enhancement would be to pass in options like color of dot
slider();

//! Lifecycle DOM Events
//? exercise code after all has loaded
document.addEventListener("DOMContentLoaded", function (e) {
	console.log("HTML parsed and DOM tree built!", e);
});
//? no need to do this since <script> is at the end of our HTML doc

//? when complete page is loaded
window.addEventListener("load", function (e) {
	console.log("page fully loaded", e);
});

// //? before user leaves the site (easy to abuse)
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// })

//! efficient script loading (Async & Defer)
//? defer is the best (it guarantees the order)
//? async if the order doesn't exist
