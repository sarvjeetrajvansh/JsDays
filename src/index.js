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
// === DAY 2 ====

// Objects

var obj = {
  a: "10",
  b: "2"
  // "my-key" : "10",
};

// var obj = new Object();

console.log(obj.a);
console.log(obj["b"]);

// console.log(obj["my-key"]);
var dog = {
  name: "bully",
  breed: "bulldog",
  bark: function () {
    console.log("woof woof");
  },
  // Nesting new object inside object
  owner: {
    name: "Monika",
    profession: "Dog Instructor"
  }
};

console.log(dog.name);
console.log(dog.bark());
// Nesting of object is possible
console.log(dog.owner.name);

// var a = {},
//     b = {key : 'b'},
//     c = {key : 'c'};

var a = {};
var b = { key: "b" };
var c = { key: "c" };

a[b] = 123;
//a['[Object Object]'] = 123
a[c] = 456;
// a ['[Object Object]'] = 456

console.log(a[b]);

console.log(b.toString());

// Functions

//  function declaration
// function a(){
//   console.log("a");

// }
// function expression

var func = function () {
  console.log("func");
};

//  In Js You can return a function
// you can even pass a function as parameter

function abc() {
  return function () {
    console.log("return func");
  };
}

var x = abc();

x();

function def(fn, e) {
  fn(e);
  // call back
}

def(function (e) {
  console.log("passed fucntion", e);
}, 2);

function zxy() {
  console.log(arguments.length);
  var arr = [1, 2, 3];
  arr.push(4);
  console.log(arr);
}

zxy(1, 2, 3, 4, 5, 6, "xyz");

var passA = 10;

function hst() {
  var passA = 0;
  console.log(passA);
  passA = 2;

  //  javascript push all var decalaration to top.
}

hst();

// var a = [];
// var a = new Array(0);
// Create contructor fun/class as capailtal letter first.
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}
var d1 = new Dog("bully", "bulldog");

console.log(d1);

// Three ways to create an object
// 1) Dynamic a=[1,2] 2) new Constructor a=newArrya(1,2) 3) custom Constructor
