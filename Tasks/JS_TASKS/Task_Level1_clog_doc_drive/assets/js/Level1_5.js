let carName ="BMW"
console.log(carName);

x = 150;
y= 50;
z= x+y;

console.log(x);
console.log(y);
console.log(z);

let firstName;
let lastName;
let age;

firstName = "John"
lastName = "Doe"
age = 35

console.log(firstName);
console.log(lastName);
console.log(age);

// Level 1_12 aritmetic operators

//Multiplikation geht vor und so wird 5 * 10 zuerst durchgeführt.

let score = 5 + 5 * 10;
console.log('Ergebnis: ' + score);
//Du kannst Klammern() hinzufügen, um die Reihenfolge der Prioritäten zu ändern.
score = (5 + 5) * 10;
console.log('Ergebnis: ' + score);
// Du kannst Werte auf Variablen addieren.
score = 0;
score = score + 10;
console.log('Ergebnis: ' + score);
// Hiervon gibt es eine verkürzte Version.
score += 10;
console.log('Ergebnis: ' + score);

// Inkrementierung und Dekrementierungen können wie folgt verwendet werden:
let zahl = 1;
zahl = zahl + 1;
zahl += 1;
// Verwende Inkrement-Operatoren
zahl++;
console.log('increment: ' + zahl);
// Verwende Dekrement-Operatoren
zahl--;
console.log('dekrement: ' + zahl);

// Level1_13
// Addition
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);

// Subtraktion
let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

// Multiplikation
let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);

// Division
let division_operator = 4 / 2;
console.log("division: " + division_operator);

// Modul: zeigt an, was der Rest sein würde.
let modulus_operator = 14 % 5;
console.log("modulus: " + modulus_operator);

//Level1_3 document write
document.write('<h1>Hello World</h1><p>Have a nive day</p>');
let myText= "<p>Hello Again</p>"
document.write(myText)

let myName = "Enes"
let myLastName = "Yilmaz"

document.write(`<p>Name: ${myName}</p>`)
document.write(`<p>Nachname: ${myLastName}</p>`)

// Level 1_11 string methoden

x = "Hello "
y = "World<br>"

z = x+y

document.write(z)

n = x + " " + y

document.write(n)

a = x + "World"
document.write(a)

let meinString = "Ich komme zuerst"

console.log(meinString + " Ich komme auf Platz zwei");
