
	const menuMobile = () => {
	  const menuNavUl = document.querySelector(".menu-nav ul");

	  document.querySelector(".menu-mobile").addEventListener("click", function() {
	    menuNavUl.style.display == "flex"
	      ? (menuNavUl.style.display = "none")
	      : (menuNavUl.style.display = "flex");
	  });
	};

	menuMobile();

	function myFunction(x) {

		const menuNavUl = document.querySelector(".menu-nav ul");

	  if (x.matches) { // If media query matches
	    menuNavUl.style.display = "flex";
	  }	else {
			menuNavUl.style.display = "none";
		}
	}

	var x = window.matchMedia("(min-width: 695px)")
	myFunction(x)
	x.addListener(myFunction)
