//! Presentation Logic
import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
	_parentElement = document.querySelector('.pagination');
	_errorMessage = 'No recipes found';
	_message = 'Hurray!';

	_generateMarkup() {
		//? this._data now has all the search results object
		const currentPage = this._data.page;
		const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

		//? On page 1 and there are more results
		if (currentPage === 1 && numPages > 1) {
			return `
				<button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
					<span>Page ${currentPage + 1}</span>
					<svg class="search__icon">
						<use href="${icons}#icon-arrow-right"></use>
					</svg>
				</button>
			`;
		}
		//? On page 2+ and there are more results
		if (currentPage < numPages) {
			return `
				<button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
					<svg class="search__icon">
						<use href="${icons}#icon-arrow-left"></use>
					</svg>
					<span>Page ${currentPage - 1}</span>
				</button>
				<button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
					<span>Page ${currentPage + 1}</span>
					<svg class="search__icon">
						<use href="${icons}#icon-arrow-right"></use>
					</svg>
				</button>
			`;
		}
		//? On last page of results
		if (currentPage === numPages && numPages > 1) {
			return `
				<button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
					<svg class="search__icon">
						<use href="${icons}#icon-arrow-left"></use>
					</svg>
					<span>Page ${currentPage - 1}</span>
				</button>
			`;
		}
		//? On page 1 and only 1 page of results
		return '';
	}

	//? Publisher
	addHandlerClick(handler) {
		this._parentElement.addEventListener('click', function (e) {
			const btn = e.target.closest('.btn--inline'); //? search up the DOM
			if (!btn) return;
			const goToPage = +btn.dataset.goto;
			handler(goToPage);
		});
	}
}

export default new PaginationView();
