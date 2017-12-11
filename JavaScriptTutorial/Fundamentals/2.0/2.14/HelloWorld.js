// 2.14 HelloWorld.js
"use strict"

let task1 = false;
let task2 = false;
let task3 = false;
let task4 = true;


// Task #1
function checkAge(age) {
	if (age > 18) {
		return true;
	}
	return confirm("Did parent allow you?");

	/*
	 * Else is not required since return will automatically
	 * exit the function.
	 */
}

// Task #2
function checkAgeV2(age) {
	let check;
	age > 18 ? check = true : check = confirm ("Do you have your parents permission to access this?");
	return check;
}

function checkAgeV3(age) {
	return age > 18 || confirm("Do you have parents permission to acces this?");
}
if (task2) { 
	alert("Age V2");
	checkAgeV2(18);
	alert ("Age V3");
	checkAgeV3(20);
}

// Task #3
function min(a, b) {
	let ans;
	a >= b ? ans = b : ans = a;
	return ans;
}

if (task3) {
	alert("Task 3");
	alert(min(2, 5) == 2);
	alert(min(3, -1) == -1);
	alert(min(1, 1) == 1);
}

// Task #4
function pow(x, n) {
	n = Math.round(n, 1);
	return x **n;
}

if (task4) {
	alert("Task 4");
	alert(pow(3, 2));
	alert(pow(3, 3));
	alert(pow(1, 100));
	alert(pow(4, 1/2));
}
