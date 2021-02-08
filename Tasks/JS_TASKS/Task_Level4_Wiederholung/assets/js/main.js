// Level 1_14

console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(-15));
console.log(Boolean("Hello"));
console.log(Boolean("false"));
console.log(Boolean(1+7+3.14));
console.log(Boolean(0));
console.log(Boolean(-0));
// console.log(Boolean(Nan)); // reference error
console.log(Boolean(null));
console.log(Boolean(false));

// Level 1_15

let num = 5;
let anotherNum = 8;

console.log(num == anotherNum);
console.log(num < anotherNum);
console.log(num > anotherNum);
console.log(num <= anotherNum);
console.log(num >= anotherNum);
console.log(num == "5"); // true
console.log(num != 8); // true
console.log(num != "5"); // false

// Level 1_3
let i = 1;
let lastName = "Johnson";
let j = "2";
let status = true;
let hello = "hello";
let helloWorld = "hello";

console.log(typeof(i));
console.log(typeof(lastName));
console.log(typeof(j));
console.log(typeof(status));
console.log(typeof(hello));
console.log(typeof(helloWorld));

// Level 1_4

console.log(typeof("John"));
console.log(typeof(3.14));
console.log(typeof(NaN));
console.log(typeof(false));
console.log(typeof([1,2,3,4]));
console.log(typeof({name:'John', age:34}));
console.log(typeof(new Date()));
console.log(typeof(function() {}));
console.log(typeof(null));
console.log(typeof(""));
console.log(typeof(3+2==5));
console.log(typeof(3 + "3"));

// Level 1_8 aufgabe 1

let x = 20;
let y = 30;
let z = 10;
console.log(x+y);
console.log(x-y);
console.log(y-x);
console.log(x*y);
console.log(x/y);
let resultOne = x*y/z;
console.log(resultOne);

// Level 1_8 aufgabe 2

let a = 15;
let b = 9;
let c = 20;
let rest = a%b;
let resultTwo = (a+b)*c;
console.log(rest);
console.log(resultTwo);
console.log(++a);
console.log(--b);
resultThree = b-a;
console.log(resultThree);
console.log(resultOne % resultTwo);

// Level 2_1

const button = document.getElementById("navHome")

function changeButton() {
  button.innerHTML = "emoH";
  button.style.backgroundColor= "pink";
}

// Level 2_2
const nachname = document.getElementById("nachname");
const vorname = document.getElementById("vorname");
const land = document.getElementById("land");

function getData() {
  console.log("Nachname: "+nachname.value+ " Vorname: "+ vorname.value+ " Land: "+land.value);
}

// Level 2_10
const type = document.getElementById("element");

function smallFont() {
  type.classList = "";
  type.classList = "small";
  type.style.color = "green";
  type.style.boxShadow= "5px 10px 2px 1px #888888"
  type.style.transition = " all  1s"
}
function middleFont() {
  type.classList = "";
  type.classList = "middle";
  type.style.color = "blue";
  type.style.boxShadow= "15px 15px 2px 1px #888888"
  type.style.transition = " all  1s "
}
function bigFont() {
  type.classList = "";
  type.classList = "big";
  type.style.color = "red";
  type.style.boxShadow= "25px 25px 2px 1px #888888";
  type.style.transition = "all 1s"
}



// Level 2_11

const section = document.getElementById("section");

function changeBgc() {
  section.classList = "";
  section.classList = "color"+Math.floor(Math.random()*10);
}

