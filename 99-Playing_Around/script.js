window.onscroll = function () {
	myFunction();
};

const header = document.getElementById("myHeader");
const sticky = header.offsetTop;
const header2 = document.getElementById("myHeader2");
const header2Container = document.getElementById("myHeader2Container");
let rect2;

function myFunction() {
	rect2 = header2Container.getBoundingClientRect();
	if (window.pageYOffset > sticky) {
		// && rect2.top > 0) {
		header.classList.add("sticky");
		//header2.classList.add("sticky");
		//console.log(`sticky: ${sticky}`);
	} else {
		header.classList.remove("sticky");
	}
	if (rect2.top < 1) {
		header2.classList.add("sticky");
		//header.classList.remove("sticky");
	} else {
		header2.classList.remove("sticky");
	}
	console.log(`rect2.top: ${rect2.top}`);
	//console.log(`header2.offsetTop: ${header2}`);
}
