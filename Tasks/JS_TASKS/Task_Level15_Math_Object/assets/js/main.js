// LEVEL 1-1
const PI = Math.PI
let roundedPI = PI.toFixed(2)
console.log(PI);
console.log(roundedPI);

// LEVEL 1-2

var array = [
  3.14,
  193.4464,
  0.8596433607,
  -2.940629089,
];
console.log(typeof array);
function roundNumbers(a) {
  if (typeof a === "object") {
    a.forEach(x => console.log(Math.round(x)))
  } else {
    console.log(Math.round(a));
  }
}
roundNumbers(array)
roundNumbers(3.3894574896849)

// LEVEL 1-3
let randomNum = Math.floor(Math.random())
let randomNum1_10 = Math.floor(Math.random() * 10 + 1)
let randomNum1_100 = Math.floor(Math.random() * 100 + 1)
console.log(randomNum);
console.log(randomNum1_10);
console.log(randomNum1_100);


// LEVEL 1-4

console.log(Math.max(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488));

console.log(Math.min(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488));

// LEVEL 2-1

function roundTo(zahl, genauigkeit) {
  let nummer = zahl.toFixed(genauigkeit)
  return nummer;
}

console.log(roundTo(3.1415926535, 5));

// LEVEL 2-2
let secretNumber = Math.floor(Math.random() * 10 + 1)
let prompt1 = prompt('Schätzen Sie die Nummer zwichen 1 und 10')

if (prompt1 == secretNumber) {
  console.log('Juppi .. Du hast gewonnen');
} else {
  console.log('Du hast verloren. Die nummer lautet ' + secretNumber);
}

// LEVEL 2-3


