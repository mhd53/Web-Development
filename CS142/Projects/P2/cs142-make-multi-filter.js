"use strict"
// @mhd53
// CS142 Project 2: JavaScript Calisthenics
"use strict";
function cs142MakeMultiFilter(originalArray) {
	/* Takes an array as a parameter and rerturns a function that can be used
	   to filter the elements of this array.
	   Parameters: Array
	   Returns: function 
	*/

	var arrayFilterer = function arrayFilterer(filterCriteria, callback) {
		/* Internally keeps track of a notion called currentArray. Initally currentArray is 
		   set to be identical to originalArray. 
		   Parameters: two functions
		   Returns: Should return itself unless the filterCriteria parameter is not specified
		   in which case it should return the currentArray. 
		*/

		// Variables
		var currentArray = originalArray;

		if (typeof filterCriteria != "function") {
			return currentArray;
		}

		for (var i = 0; i < originalArray.length; i++) {
			var e = originalArray[i];
			if (filterCriteria(e) == false) {
				delete currentArray[i];
			}
		}

		if (callback != undefined) {
			callback();
		}

		return arrayFilterer;
	}

	return arrayFilterer;
}

alert("Hello World!");
// console.log("Type of function: " + (typeof cs142MakeMultiFilter));