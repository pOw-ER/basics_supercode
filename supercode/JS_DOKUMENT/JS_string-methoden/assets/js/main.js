console.log("test");

//length

let myString = "superwoman";
let myString2 = "hello";

let x = myString.length;
let y = myString2.length;

console.log("x "+x);
console.log("y "+y);
console.log(x+y);

//indexOf() 0-1-2-3...

let txt = "Hallo Supercode, wir lernen heute String Methoden."

console.log(txt.indexOf('supercode')); // -1, weil case sensitive.Content nicht lesbar, vorhanden
console.log(txt.indexOf('Supercode'));
console.log(txt.indexOf('o'));
console.log(txt.indexOf('S'));

//search 

console.log(txt.search('wir'));

//slice 2 Parameter

let myTxt = "Anass, Eric, Elaine"

console.log(myTxt.slice(7,11));

//substring() 2 Parameter

let myTxt2 = "Heute ist Steffens Geburtstag."
let res = myTxt2.substring(10,17)

console.log(res);

//replace() 

let res2 = myTxt2.replace("Steffens", "Afraes");

console.log(res2);

//toUpperCase() 

let res3 = res2.toUpperCase();

console.log(res3);

//toLowerCase();

let res4 = res3.toLowerCase();

console.log(res4);

//concatenation

let myWord = "Hello";
let myWord2 = "World";

console.log(myWord+" "+ myWord2);