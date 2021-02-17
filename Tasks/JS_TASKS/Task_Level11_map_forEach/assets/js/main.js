// LEVEL 1-1

let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta"
]
getraenke.sort()
let myDrinks = elt => {
  console.log(elt)
  document.write(elt + "<br>")
}
getraenke.forEach(myDrinks)

// LEVEL 1-2

let upperDrinks = getraenke.map(drink => drink.toUpperCase())
console.log(upperDrinks);

// LEVEL 1-3

let array = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78];
let compare = (a, b) => a - b
let array1 = array.map(a => a * 2).sort(compare)
console.log(array1);

// LEVEL 1-4

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let celsius = a => Math.round(((a - 32) / 1.8).toFixed(0))

let celsiusTemp = fahrenheit.map(celsius)
console.log(celsiusTemp);

// LEVEL 1-5

let checkNumber = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78];

let result = [];
checkNumber.forEach(a => a % 3 == 0 ? result.push(a + 100) : result.push(a))

console.log(result);

