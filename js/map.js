console.log("before square has been defined");

var square = function(number){
	console.log("square has been called with " + number);
	return number * number;
};

console.log("after square has been defined");


var cube =function(parameter){
	console.log("cube has been called with " + parameter);
	return parameter * parameter * parameter;
	//return square(number) * number;

};

var q1 = square(9); //square 9 by calling our function
console.log("q1 = " + q1);

var q2 = cube(9);
console.log("q2 = " + q2);