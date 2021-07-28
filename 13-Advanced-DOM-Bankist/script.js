'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault(); // the page will not jump up when link is clicked
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


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
