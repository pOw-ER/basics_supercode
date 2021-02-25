// new Date()
// aktuelle Datum und Uhrzeit aus der Zeitzone des Browsers
console.log("%c new Date() Methods", "color:tomato");
let d = new Date();
console.log(d);

// Tue Feb 23 2021 16:52:10 GMT+0100 (Central European Standard Time)
// new Date(year, month, day, hours, minutes, seconds, milliseconds) syntax

// 7 Zahlen geben Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde an (in dieser Reihenfolge):
d = new Date(2000, 9, 2, 11, 45, 10, 0);
console.log(d);

// 6 Zahlen geben Jahr, Monat, Tag, Stunde, Minute, Sekunde an:
d = new Date(2000, 9, 2, 11, 45, 10);
console.log(d);

// 5 Zahlen geben Jahr, Monat, Tag, Stunde und Minute an:
d = new Date(2000, 9, 2, 11, 45);
console.log(d);

// 4 Zahlen geben Jahr, Monat, Tag und Stunde an:
d = new Date(2000, 9, 2, 11);
console.log(d);

// 3 Zahlen geben Jahr, Monat und Tag an:
d = new Date(2000, 9, 2);
console.log(d);

// 2 Zahlen geben Jahr und Monat an: // Bei weniger als  2 Parameter, wird dieser wie Milisekunden behandelt
d = new Date(2000, 9);
console.log(d);

// Date Objects in HTML anzeigen
// new Date(dateString)
d = new Date("October 13, 2008 11:13:00");
console.log(d);

const res = document.getElementById("res");

d = new Date();
console.log(typeof d);

console.log(typeof d.toString());
res.innerHTML = d.toString();

// toUTCString() konvertiert ein Datum in eine UTC-Zeichenfolge (ein Datumsanzeigestandard)
res.innerHTML += "<br>" + d.toUTCString();

// toDateString() konvertiert ein Datum in ein besser lesbares Format
res.innerHTML += "<br>" + d.toDateString();

res.innerHTML += "<br>" + d.toLocaleDateString();
res.innerHTML += "<br>" + d.toLocaleTimeString();
res.innerHTML += "<br>" + d.toLocaleString();

console.log("%c Date Get Methods", "color:tomato");

// Date Get Methods
//getTime() Millisekunden seit dem 1. Januar 1970 (internationale Zeit Anfang)
console.log(d.getTime());

//getFullYear() Jahr eines Datums als vierstellige Zahl
console.log(d.getFullYear());

//getMonth() Monat eines Datums als Zahl (0-11) erste Monat (Januar) die Monatsnummer 0
console.log(d.getMonth());

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(months[d.getMonth()]);

//getDate() Tag eines Datums als Zahl (1-31)
console.log(d.getDate());

// getHours() Stunden eines Datums als Zahl (0-23)
console.log(d.getHours());

// getMinutes() Minuten eines Datums als Zahl (0-59)
console.log(d.getMinutes());

// getSeconds() Sekunden eines Datums als Zahl (0-59)
console.log(d.getSeconds());

//getMilliseconds() Millisekunden eines Datums als Zahl (0-999)
console.log(d.getMilliseconds());

// getDay() Wochentag eines Datums als Zahl (0-6) !die Woche fängt bei 0 mit Sonntag an!
console.log(d.getDay());

// Gebe den Wochentag als Namen in der Konsole zurück. 5 min

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(days[d.getDay()]);

console.log("%c set Date() Methods", "color:tomato");

// Set Date Methods -  Legt teile eines Datums fest
// setFullYear() legt das Jahr fest
d.setFullYear(2008);
console.log(d);

// setMonth() Monat (0-11)
d.setMonth(11);
console.log(d);

// setDate() Tag (1-31)
d.setDate(15);
console.log(d);

// kann auch verwendet werden, um einem Datum Tage hinzuzufügen
d.setDate(d.getDate() + 5);
console.log(d);

// setHours(), setMinutes (),setSeconds ()

d = new Date();
console.log(d);
