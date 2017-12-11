// 2.11 HelloWorld.js

// Boolean Switches
let task1 = false;
let task2 = false;
let task3 = false;
let task4 = false;
let task5 = false;
let task6 = false;
let task7 = false;
let task8 = true;


// Task #1
if (task1) {
	alert (null || 2 || undefined); // 2
}


// Task #2
if (task2) {
	alert(alert(1) || 2 || alert(3)); // alert(1) and 2 will execute
	// alert(1) returnes 'undefined' which is a 'falsy' value
}

// Task #3
if (task3) {
	alert(1 && null && 2); // null
}

// Task #4
if (task4) {
	alert(alert(1) && alert(2)); // alert 1 will execute and return 'undefined' 
}

// Task #5
if (task5) {
	alert(null || 2 && 3 || 4); // 2, first & returns 3 then, or1 returns 3 and or2 return 3
}

// Task #6
if (task6) {
	let age = 89;
	if (age >= 14 && age <= 90) {
		alert("You are welcome!");
	} else {
		alert("You are not welcome!");
	}
}

// Task #7
if (task7) {
	alert("You are in Task #7.");
	let age = 13;

	// With Not operator
	alert("With Not operator.");

	if (!age >= 14 && !age <= 90) {
		alert("You are welcome!");
	} else {
		alert("You are not welcome!");
	}

	// Without Not operator
	alert("Without Not operator.");

	if (age <= 14 || age >= 90) {
		alert("You are welcome!");
	} else {
		alert("You are not welcome!");
	}	
}

// Task #8
if (task8) {
	if (-1 || 0) alert("first"); // execute
	if (-1 && 0) alert("second"); // will not execute
	if (null || -1 && 1) alert("third"); // execute
}



