// This is a global variable
let counter = 0;

window.onload = function loadFunction()
{
	// Here I set the screen to the initial value when the website is fully loaded
	document.getElementById('screen').innerHTML = "The counter value is "+counter;
}

// Called when the user clicks
window.increaseCounter = function increaseCounter()
{
	// Increase the global counter by one
	counter++;
	// Update the screen with the new value
	document.getElementById('screen').innerHTML = "The counter value is "+counter;
}

// Your code here
let decreaseCounter = () => {
	counter--;
	document.getElementById('screen').innerHTML = "The counter value is "+counter;
}
let element = document.getElementById('decrease');
element.addEventListener('click',decreaseCounter);