import "./styles.css";

import "./styles.css";

var a = "abc";
var b = 1;
var c = true;
var d = null;
var e;
var f = undefined; // usually never do

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
// Null is a primitive data type of type Object,
// It implifies the type of no value
console.log(typeof e);
console.log(typeof typeof f);
// Everything JS is object
//  Type of followed by n type of is string
// Js will add ; for you
// == , ===
console.log(1 == 1);
console.log(1 === "1");
//Coersion or type conversion

console.log(+"1");
console.log(+"Hello");

var a = +"hello";
var b = +"hello world";

console.log(a, b);

console.log(a === b);
// NaN is not equal to iself

console.log(typeof NaN);

// 3+2+"9" = 5 + "9" = 59
// 3+"3" = 33
// string + string = string
// string + number = number

//  == , <=,>= , -, * , / all do
// numeric conversion , but + does string
// converison
// + as Unary operator is numeric conversion
// +"Hello" + "World" = NaNWorld
// -'34' + 10 = -24
//Object data Types :

var a = [1, 3, 2, "Hello World"];
console.log(a[3]);

// Assigment by value
var a = [1, 3, 4, 6];
// Assignment by reference
var b = a;
a.length = 0;
// a got new empty array location , but b is
// still pointing to that old location
console.log(a, b);

//  primtive are by value & obje are by ref

// Garbage collection in Js means, memory not reachable
//  is garbage collected.

//  To make an array empty set its length to zero.
// a.length = 0

// null==undefined -> true & null === undef -> false

// var b = new Array(0); // conctructor
// var a = [] internally it's newArray(0);
