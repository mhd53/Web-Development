// 2.12 HelloWorld.js
// @mhd53
"use strict"

let task1 = false;
let task2 = false;
let task3 = false;
let task4 = false;
let task5 = false;
let task6 = false;
let task7 = true;

// Task #1
if (task1) {
	alert("Task #1");
	let i = 3;

	while (i) {
		alert(i--); // last value output = 1, since posfix returns the value before the decrement 
	}
}

// Task #2
if (task2) {
	alert("Task #2");

	// prefix ++
	alert("Prefix");
	let i = 0;
	while (++i < 5) alert(i); // 1 to 4

	// posfix ++
	alert("Posfix");
	i = 0;
	while (i++ < 5) alert(i); // 1 to 5
}

// Task #3
if (task3) {
	alert("Task #3");

	// posfix ++
	alert("Posfix");
	for (let i = 0; i < 5; i++) alert(i); // 0 to 4

	// prefix ++
	alert("Prefix");
	for (let i = 0; i < 5; ++i) alert(i); // 0 to 4 
}

// Task #4
if (task4) {
	alert("Task #4");

	for (let i = 2; i <= 10; i++) {
		if (i % 2 == 0) {
			alert(i);
		}
	}
}

// Task #5 
if (task5) {
	alert("Task #5");
	let i = 0;
	while (i < 3) {
		alert(`number ${i}!`);
		i++;
	}
}

// Task #6
if (task6) {
	alert("Task #6");
	while(true) {
		result = prompt("Enter a number greater than 100: ", " ");
		if (result > 100) {
			alert("Input = " + result);
			break;
		} else if (result == false) {
			break;
		} else {
			continue;
		}	
	}
}

// Task #7
if (task7) {
	alert("Task #7");
	let n = 100;
	
	// Iterate from 2 to n and check to see if i is a prime number
	for (let i = 2; i <= n; i++) {
		let isPrime = true;

		// if i is less than 9 use normal algorithm (brute force)
		if (i <= 9) {
			for (let p = 2; p < i; p++) {
				if (i % p == 0) {
					isPrime = false;
					break;
				}
			}

			// Output if i is prime number
			if (isPrime) {
				alert(i);
			}
		}
		
		// else use more efficient algorithm (iterate until the sqrt of i)
		else {
			for (let p = 2; p < Math.round(i ** 0.5) + 1; p++) {
				if (i % p == 0) {
					isPrime = false;
					break;
				}
			}

			// Output if i is prime number
			if (isPrime) {
				alert(i);
			}
		}
	}
}	
