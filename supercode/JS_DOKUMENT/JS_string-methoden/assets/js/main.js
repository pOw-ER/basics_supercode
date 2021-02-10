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

let hero = "superman"
let age = 30
let city = "NYC"

function greeting(name,age,cty){
  console.log(`I am ${name} and ${age} years old. I am from ${city}`);
}
greeting("superman", 30, "NYC")




function qualityIndex() {
  let skala = document.getElementById('skala').value
  let wert = document.getElementById('wert')
  let section = document.getElementById('section')
  if (skala <=50) {
    wert.innerHTML = "Little or no risk"
    section.style.backgroundColor = "green"
    wert.style.color= "#000"
  } else if (skala <= 100) {
    wert.innerHTML = "Acceptable quality"
    section.style.backgroundColor = "gold"
    wert.style.color= "#000"
  } else if (skala <= 150) {
    wert.innerHTML = "General Public not likely affected"
    section.style.backgroundColor = "orange"
    wert.style.color= "#000"
  } else if (skala <= 200) {
    wert.innerHTML = "All may experience some effects"
    section.style.backgroundColor = "red"
    wert.style.color= "#fff"
  } else if (skala <= 300) {
    wert.innerHTML = "All may experince more serious effects"
    section.style.backgroundColor = "#9A0246"
    wert.style.color= "#fff"
  } else if (skala <= 500) {
    wert.innerHTML = "Emergency conditions"
    section.style.backgroundColor = "#7E0123"
    wert.style.color= "#fff"
  }
}
qualityIndex()
