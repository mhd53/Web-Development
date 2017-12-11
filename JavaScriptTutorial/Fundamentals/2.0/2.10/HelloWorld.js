// 2.10 HelloWorld.js

// Task #1
if ("0") {
	alert("Hello"); // alert will be executed since '0' == 1
}

// Task #2
const OFFICIAL_NAME = "ECMAScript";
result = prompt("What is the official name of JavaScript?", "");
if (result == OFFICIAL_NAME) {
	alert("Right!");
} else {
	alert("Didn't know? " + OFFICIAL_NAME);
}

// Task #3
result = prompt("Enter a number:", 0);
if (result > 0) {
	alert(1);
} else if (result < -1) {
	alert(-1);
} else {
	alert(0);
}

// Task #4
user = prompt("Login: ", "");
if (user == "Admin") {
	password = prompt("Enter Your Password:", "");
	if (password == "TheMaster") {
		alert("Welcome!");
	} else if (password == null || password == "") {
		alert("Canceled.");
	} else {
		alert("Wrong password!");
	}
} else if (user == null || user == "") {
	alert("Canceled.");
} else {
	alert("I don't know you.");
}

// Task #5
let a = 1;
let b = 2;
(a + b) < 4 ? result = "Below" : result = "Over";
alert("Result is equal to: " + result);

// Task #6
let login = "Sam";
let message;
login == "Employee" ? message = "Hello" :
login == "Director" ? message = "Greetings" :
login == "" ? message = "No login" : message = "";
alert(message);
