// to check what is returned is not null
const myFunc = (n1, n2) => {
	return n1 + n2;
};
// testing with array example
let myArray = [
	"Katie",
	"Kiki",
	"Sandra",
	"Sophie",
	"Susette",
	"Christina",
	"Belinda",
	"Sarah",
	"Sara",
	"Ursula",
	"Seraphina",
	"Clementine",
	"Alexandra",
	"Deborah",
];
// a value that is truthy
let myFunc2 = (n1, n2) => {
	x = n1 + n2;
	if (x < 5) {
		return true;
	} else {
		return false;
	}
};
// a value that is not falsy
let truthFunc = (n1, n2) => {
	x = n1 + n2;
	if (x == 4) {
		return true;
	} else {
		return false;
	}
};
// create an object, check if the properties match in testing
let objFunc = () => {
	function Car(make, model) {
		this.make = make;
		this.model = model;
	}
	let myCar = new Car("Ford", "Fiesta", "2001");
	return myCar;
};
// a function that will return items in an array with six or more characters
let arrayFunc = () => {
	let newArray = [];
	for (let i = 0; i < myArray.length; i++) {
		if (myArray[i].length >= 6) {
			// return myArray[i];
			newArray.push(myArray[i]);
		}
	}
	return newArray;
};
// function to convert a number to a string
let stringFunc = () => {
	let num = 4;
	let text = num.toString();
	return text;
};
// display correct planet with the number order it is away from the sun
let planetFunc = () => {
	let planets = [
		"Mercury",
		"Venus",
		"Earth",
		"Mars",
		"Jupiter",
		"Saturn",
		"Uranus",
		"Neptune",
	];
	return planets[2];
};
// count the students in the class. with an array or boolean values, count how many students are present
let classFunc = () => {
	let students = [];
	let x = 1;
	for (let i = 0; i < 25; i++) {
		if (x % 4 == 0) {
			students.push(false);
			x++;
		} else {
			students.push(true);
			x++;
		}
	}
	let studentCount = 0;
	for (let i = 0; i < students.length; i++) {
		if (students[i]) {
			studentCount++;
		}
	}
	return studentCount;
};
// square every digit and concatenate them (must return an integer)
let squFunction = (num1) => {
	let n = String(num1);
	n = n.split("");
	for (let i = 0; i < n.length; i++) {
		n[i] = parseInt(n[i]);
		n[i] = n[i] ** 2;
		n[i] = String(n[i]);
	}
	n = n.join("");
	n = parseInt(n);
	return n;
};
// given a year, returns the century
let centFunc = (num) => {
	let n = String(num);
	n = n.split("");
	let cent = [];
	for (let i = 0; i < 2; i++) {
		cent.push(n[i]);
	}
	console.log(cent);
	cent = cent.join("");
	cent = parseInt(cent);
	return cent;
};
// with an array of ones and zeros, convert the equivalent binary value to an integer

const intFunc = (arr) => {
	const binaryString = arr.join("");
	return parseInt(binaryString, 2);
};

console.log(intFunc([1, 1, 1, 1]));

module.exports = {
	myFunc,
	myArray,
	myFunc2,
	truthFunc,
	objFunc,
	arrayFunc,
	stringFunc,
	planetFunc,
	classFunc,
	squFunction,
	centFunc,
	intFunc,
};
