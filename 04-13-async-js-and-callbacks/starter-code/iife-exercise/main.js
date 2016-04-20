// Write an IIFE function that takes a timer argument.
// The function will automatically execute and count up every second until the specified argument.
// Use the setTimeout function to count up.
// Hint: a second is the timer passed * 1000 (milliseconds).



function doGreeting(name) {
	console.log("hi, " + name)
}

function complement(name) {
	console.log(name + ", you are awesome!")
}

function greeter (aGreeterFunc) {
	aGreeterFunc('johnny');
}


greeter(doGreeting);
greeter(complement);