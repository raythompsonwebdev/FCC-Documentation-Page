$(document).ready(function () {
	/**
	 * Mobile menu
	 */
	const menuToggle = document.querySelector(".menu-toggle");
	const slideoutMenu = document.querySelector("#site-navigation");
	const slideoutMenuWidth = slideoutMenu.offsetWidth;

	const navLinks = document.getElementsByClassName("nav-link");
	const scrollScreen = document.querySelector(["body", "html"]);
	const siteHeader = document.querySelector("#main-header");

	menuToggle.addEventListener("click", (event) => {
		event.preventDefault();

		// toggle open class
		slideoutMenu.classList.toggle("show");

		// add css transition to menu
		slideoutMenu.style.transition = "all 0.3s ease-in 0s";

		// slide menu
		if (slideoutMenu.classList.contains("show")) {
			slideoutMenu.style.left = "0px";
		} else {
			slideoutMenu.style.transition = "all 0.3s ease-in 0s";
			slideoutMenu.style.left = `${-slideoutMenuWidth}px`;
		}
	});

	// scrolling function - (https://codepen.io/ugg0t/pen/mqBBBY)
	const scrollTo = (element) => {
		scrollScreen.scrollTo({
			behavior: "smooth",
			left: 0,
			top: element.offsetTop - 100, // deduct height of header.
		});
	};

	window.onscroll = function () {
		// fixes header to top of page on page scroll.
		if (scrollScreen.scrollTop >= 100) {
			siteHeader.classList.add("fixed-header");
		} else {
			siteHeader.classList.remove("fixed-header");
		}
	};

	Array.from(navLinks).forEach((link) => {
		// add event listener to each link
		link.addEventListener("click", (event) => {
			// Store hash
			const { hash } = event.target;
			// check if has empty
			if (hash !== "") {
				// if not, Prevent default anchor click behavior
				event.preventDefault();
				// select element id converting hash to string using template literal and use as argument in scrolling function.
				scrollTo(document.querySelector(`${hash}`));
			} // End if

			if (slideoutMenu.classList.contains("show")) {
				slideoutMenu.style.left = "-240px";
				slideoutMenu.classList.remove("show");
			}
		});
	});

	$("button#myBtn").on("click", function (event) {
		$("html,body").animate({ scrollTop: 0 }, 800);
	});
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
//function topFunction() {
//document.body.scrollTop = 0; // For Safari
//document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
//}
