// Math Object
// Mit dem JavaScript Math-Objekt kann man mathematische Aufgaben für Zahlen ausführen.

console.log(Math);

// Math.ceil();
// Math.floor();
// Math.round();
// Math.random();
// Math.max();
// Math.min();
// Math.pow();
// Math.sqrt();
// Math.cbrt();
// Math.PI;
// Math.abs();

//15 min

//Rundet die Zahl auf die nächste Ganzzahl auf
console.log(Math.ceil(1.4));

// Rundet die Zahl nach unten auf die nächste Ganzzahl
console.log(Math.floor(1.4));

// Rundet die Zahl auf die nächste Ganzzahl 1.4 wird abgerundet (1) und 1.5 wird aufgerundet (2).
console.log(Math.round(1.4));
console.log(Math.round(1.5));

// Zufallszahl zwischen 0 (einschließlich) und 1 (exklusiv)
console.log(Math.random());
// 1 - 10
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1); //Ganzzahl

// Gib die Zahl mit den höchsten Wert zurück
console.log(Math.max(5, 10, 22, 3));

// Gib die Zahl mit den niedrigsten Wert zurück
console.log(Math.min(5, 10, 22, 3));

// Gib den Wert der Zahl hoch 3 (2*2*2)
console.log(Math.pow(2, 3));

// Gib die Quadratwurzel zurück
console.log(Math.sqrt(4));

// Gib die Kubikwurzel zurück
console.log(Math.cbrt(30));

// PI unendliche Zahl - 3,14...
console.log(Math.PI);

// gibt den absoluten (positiven) Wert zurück
console.log(Math.abs(-7.25));
