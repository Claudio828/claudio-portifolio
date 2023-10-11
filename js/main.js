/* #region  theme changer */
// theme changer

var toggle = document.getElementById("theme-toggle");

var storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) document.documentElement.setAttribute("data-theme", storedTheme);

toggle.onclick = function () {
	var currentTheme = document.documentElement.getAttribute("data-theme");
	var targetTheme = "light";

	if (currentTheme === "light") {
		targetTheme = "dark";
	}

	document.documentElement.setAttribute("data-theme", targetTheme);
	localStorage.setItem("theme", targetTheme);
};
/* #endregion */

/* #region  Navbar */
// Auto hide Navbar

window.addEventListener("scroll", function () {
	var scrollPosition = window.scrollY;
	var div = document.querySelector("#header"); // Substitua ".meuDiv" pelo seletor do seu div

	if (scrollPosition <= 100) {
		div.classList.add("twhite");
		div.classList.remove("animaDivoff");
	} else {
		div.classList.remove("twhite");
		div.classList.add("animaDivoff");
	}
});

// Responsive Navbar

function toggleDiv() {
	var div = document.getElementById("menu_bar_nav");
	var header = document.getElementById("header");
	if (div.style.display === "flex") {
		div.style.display = "none";
		header.classList.remove("animaDivoffb");
	} else {
		div.style.display = "flex";
		header.classList.add("animaDivoffb");
	}
}
/* #endregion */

/* #region  Slider */
var slides = document.getElementsByClassName("slider");
var dots = document.getElementsByClassName("dot");

var sliderIndex = 1;
showSlides(sliderIndex);

function plusSlides(n) {
	showSlides((sliderIndex += n));
}

function currentSlides(n) {
	showSlides((sliderIndex = n));
}

function showSlides(n) {
	var i;
	if (n > slides.length) {
		sliderIndex = 1;
	}
	if (n < 1) {
		sliderIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", " ");
	}
	slides[sliderIndex - 1].style.display = "block";
	dots[sliderIndex - 1].className += "active";
}

setInterval(function () {
	plusSlides(1);
}, 6000);
/* #endregion */
