
function countWhereTrue (predicate) {
	// return a function that takes one parameter (an array)
	return function (array) {
		// Initialize a counter
		var count = 0;
		// For every item in the array
		for (var i = 0; i < array.length; i++) {
			// pass the item to the given predicate function
			if (predicate(array[i])) { 
				// if the result of the predicate function is true
				count++;
				// increment the counter by 1
			} 
		}		
		return count// return the count
}}

// This function should return true or false depending on if the number
// passed to it is odd or not
function isOdd(number) {
	if (number % 2 === 0) {
		return false;
	} else {
		return true;
	}
}

function isEven (number) {
	if (number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}



// Once you've filled in the two function definitions above, the line below
// should package up 'countWhereTrue()' and 'isOdd()' into a single function that
// accepts an array of items as a parameter, loops through it and returns a count
// of how many of those items are odd numbers.
// This new function is being assigned to the variable 'countTheOdds'.
var countTheOdds = countWhereTrue(isOdd);
var countTheEvens = countWhereTrue(isEven);

// The final line below calls our new 'countTheOdds()' function and passes in an
// array of numbers. Once your code is working, the line below should return
// the number 4
console.log( countTheOdds([1, 2, 3, 4, 5, 6, 7]) );
console.log (countTheEvens([7, 8, 9, 10, 11, 12, 13]));
