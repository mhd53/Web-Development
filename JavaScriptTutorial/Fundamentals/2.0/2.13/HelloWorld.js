// 2.13 HelloWorld.js
"use strict"

let task1 = false;
let task2 = true;

// Task #1
if (task1) {
	alert("Task #1");
	let browser = "Chrome";
	if (browser == "Edge") {
		alert("You've got the Edge!");
	}

	else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
		alert("Okay we support these browsers too");
	}

	else {
		alert("We hope that this page looks ok!");
	}
}

if (task2) {
	alert("Task #2");
	let a = +prompt('a?', "");
	switch(a) {
		case 0:
			alert(0);
			break;
		case 1:
			alert(1);
			break;
		case 2:
		case 3:
			alert('2, 3');
			break;
	}
}
