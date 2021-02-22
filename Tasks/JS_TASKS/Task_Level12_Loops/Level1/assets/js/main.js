// LEVEL 1-1
for (let i = 1; i <= 10; i++) {
  console.log('Hello World ' + i);
}

// LEVEL 1-2
let array1 = []
for (let i = 0; i <= 10; i++) {
  array1.push(i)
}
console.log(array1);

// LEVEL 1-4
let names = ["Georg", "Anass", "Elaine", "Hakan", "Sam", "Kim", "Sergio"]

for (i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// LEVEL 1-6
let retArray = [];

for (i = 1; i <= 100; i++) {
  retArray.push('image_' + i)
}
console.log(retArray);

// LEVEL 1-7

let n = 1
do {
  console.log('The number is ' + n);
  n++
} while (n < 6)

// LEVEL 1-8

let geradeZahlen = 1
do {
  document.write(geradeZahlen * 2 + '<br>')
  geradeZahlen++
} while (geradeZahlen < 10)

// LEVEL 1-9

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

let result = document.getElementById('result')
let number = document.getElementById('number')

let printWords = () => {
  result.innerHTML = ""
  words.forEach(x => x.length == number.value ? result.innerHTML += `<p>${x}</p>` : null)
}
