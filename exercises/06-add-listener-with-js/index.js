window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	let element = document.getElementById("theGreen");
	element.addEventListener('click',woohoo);
};

// The listener function here
let woohoo = () => {
	alert("woohoo!")
}

