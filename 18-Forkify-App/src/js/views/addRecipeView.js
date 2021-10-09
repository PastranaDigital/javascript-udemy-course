//! Presentation Logic
import icons from 'url:../../img/icons.svg';
import View from './View.js';

class AddRecipeView extends View {
	_parentElement = document.querySelector('.upload');
	_message = 'Recipe Successfully Uploaded';

	_window = document.querySelector('.add-recipe-window');
	_overlay = document.querySelector('.overlay');
	_btnOpen = document.querySelector('.nav__btn--add-recipe');
	_btnClose = document.querySelector('.btn--close-modal');

	constructor() {
		super();
		this._addHandlerShowWindow();
		this._addHandlerHideWindow();
	}

	toggleWindow() {
		this._overlay.classList.toggle('hidden');
		this._window.classList.toggle('hidden');
	}

	//? this doesn't need the controller to interfere since it is only UI
	_addHandlerShowWindow() {
		//? .bind(this) points to the current object since it wasn't sure which one we wanted
		//? without it, the "this" keyword would be referring to the this._btnOpen instead of the whole object
		this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
	}

	_addHandlerHideWindow() {
		this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
		this._overlay.addEventListener('click', this.toggleWindow.bind(this));
	}

	addHandlerUpload(handler) {
		this._parentElement.addEventListener('submit', function (e) {
			e.preventDefault();
			const dataArray = [...new FormData(this)];
			const data = Object.fromEntries(dataArray);
			handler(data);
		});
	}

	_generateMarkup() {}
}

export default new AddRecipeView();
