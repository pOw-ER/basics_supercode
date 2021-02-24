// LEVEL 1-1
let section = document.getElementById('section')
let date1 = new Date("September 2, 2019 09:00:00")
let date2 = new Date(0)
let date3 = new Date(31556908800)
let date4 = new Date(86400000)

section.innerHTML = `<p>${date1}</p><p>${date2}</p><p>${date3}</p><p>${date4}</p>`

// LEVEL 1-2
let datum = new Date()
let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
];

let wocheTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag"
];

console.log(datum.getFullYear());
console.log(datum.getMonth() + ". Monat");
console.log(datum.getDate() + ". Tag");
console.log(datum.getHours() + ". Stunde");
console.log(datum.getMinutes() + ". Minute");
console.log(monate[datum.getMonth()]);
console.log(wocheTag[datum.getDay()]);

let digitalUhr = document.getElementById('digital-uhr')

digitalUhr.innerHTML = `<div>
<p>${wocheTag[datum.getDay()]}</p>
<p>DAY</p>
</div>
<div>
<p>${datum.getHours()}</p>
<p>HOURS</p>
</div>
<div>
<p>:</p>
</div>
<div>
<p>${datum.getMinutes()}</p>
<p>MINUTES</p>
</div>
<div>
<p>:</p>
</div>
<div>
<p>${datum.getSeconds()}</p>
<p>SECONDS</p>
</div>
<div>
<p>${datum.toLocaleTimeString('en-US').substr(8)}</p>
<p>PERIOD</p>
</div>`

// LEVEL 1-3

let newDate = new Date()

newDate.setFullYear(2222, 9, 23)
newDate.setHours(13)
newDate.setMinutes(25)
newDate.setSeconds(11)
console.log(newDate);

let newDate1 = new Date()

newDate1.setFullYear(2123, 1, 24)
newDate1.setHours(13)
newDate1.setMinutes(25)
newDate1.setSeconds(11)
console.log(newDate1);

let newDate2 = new Date()

newDate2.setFullYear(2123, 2, 24)
newDate2.setHours(13)
newDate2.setMinutes(25)
newDate2.setSeconds(11)
console.log(newDate2);

let newDate3 = new Date()

newDate3.setFullYear(2123, 2, 03)
newDate3.setHours(13)
newDate3.setMinutes(25)
newDate3.setSeconds(11)
console.log(newDate3);

let newDate4 = new Date()
newDate4.setDate(newDate4.getDate() + 30)
console.log(newDate4);

// LEVEL 1-4
let tageImMonat = (monat, jahr) => {
  return new Date(jahr, monat, 0).getDate();
}
console.log(tageImMonat(1, 2016)); // 31
console.log(tageImMonat(2, 2016)) //29
console.log(tageImMonat(2, 2017)) //28
console.log(tageImMonat(12, 2017)) // 31

// LEVEL 1-5
list = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
];

let monthOfDate = (month, year, day) => {
  let newDates = new Date(year, month - 1, day);
  return list[newDates.getMonth()]
}
console.log(monthOfDate(3, 2001, 4)); // März
console.log(monthOfDate(12, 2019, 24)); // Dezember
console.log(monthOfDate(07, 1410, 15)); // Juli

// LEVEL 1-6

let date5 = new Date(1999, 10, 5, 15)
let date6 = new Date()
let date7 = new Date(2019, 12, 3, 12)
let date8 = new Date(2000, 1, 1, 11)

let period = (date) => {
  return date.getHours() > 12 ? "PM" : "AM"
}
console.log(period(date5)); // PM
console.log(period(date6)); // PM
console.log(period(date7)); // AM
console.log(period(date8)); // AM

// LEVEL 1-7

let isWeekend = (day, month, year) => {
  let newDt = new Date(year, month - 1, day)
  if (newDt.getDay() === 0 || newDt.getDay() === 6) {
    return "JUPPI...WEEKEND"
  } else {
    return "Nee.. Arbeitstag :("
  }
}
console.log(isWeekend(15, 12, 2019)); // weekend
console.log(isWeekend(16, 2, 2001));  // Arbeitstag
console.log(isWeekend(2, 1, 2020));   // Arbeitstag
console.log(isWeekend(29, 2, 2020));  // weekend
