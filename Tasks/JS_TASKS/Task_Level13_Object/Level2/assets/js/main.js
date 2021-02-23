
// LEVEL 2-1

let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veranderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veranderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veranderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veranderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veranderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veranderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veranderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veranderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veranderung: "0.00%" }
];

let arrayName = []
let arrayName2 = []
let preis = []
let veränderungs = []
edelMetallPreise.forEach(x => arrayName.push(x.name))
console.log(arrayName);
edelMetallPreise.map(x => arrayName2.push(x.name))
console.log(arrayName2);
edelMetallPreise.forEach(x => preis.push(x.preiseGramEuro))
console.log(preis);

console.log(edelMetallPreise.map(x => x.preiseGramEuro)); // map ohne neu array

edelMetallPreise.forEach(x => veränderungs.push(x.veranderung))
console.log(veränderungs);

console.log(edelMetallPreise.map(x => x.veranderung));

edelMetallPreise.filter(x => x.preiseGramEuro > 50 ? console.log(x.preiseGramEuro) : null)

let filters = edelMetallPreise.filter(x => x.preiseGramEuro > 50 ? x : null)
console.log(filters);

document.body.innerHTML = `<table id = "table">
<tr>
  <th>Name</th>
  <th>PreiseGramEuro</th>
  <th>Veranderung</th>
</tr>
<tr>
  <td>${edelMetallPreise[0].name}</td>
  <td>${edelMetallPreise[0].preiseGramEuro}</td>
  <td>${edelMetallPreise[0].veranderung}</td>
</tr>
<tr>
<td>${edelMetallPreise[1].name}</td>
<td>${edelMetallPreise[1].preiseGramEuro}</td>
<td>${edelMetallPreise[1].veranderung}</td>
</tr>
<tr>
<td>${edelMetallPreise[2].name}</td>
<td>${edelMetallPreise[2].preiseGramEuro}</td>
<td>${edelMetallPreise[2].veranderung}</td>
</tr>
<tr>
<td>${edelMetallPreise[3].name}</td>
<td>${edelMetallPreise[3].preiseGramEuro}</td>
<td>${edelMetallPreise[3].veranderung}</td>
</tr>
<tr>
<td>${edelMetallPreise[4].name}</td>
<td>${edelMetallPreise[4].preiseGramEuro}</td>
<td>${edelMetallPreise[4].veranderung}</td>
</tr>
<tr>
<td>${edelMetallPreise[5].name}</td>
<td>${edelMetallPreise[5].preiseGramEuro}</td>
<td>${edelMetallPreise[5].veranderung}</td>
</tr>
<tr>
<td>${edelMetallPreise[6].name}</td>
<td>${edelMetallPreise[6].preiseGramEuro}</td>
<td>${edelMetallPreise[6].veranderung}</td>
</tr>
<tr>
<td>${edelMetallPreise[7].name}</td>
<td>${edelMetallPreise[7].preiseGramEuro}</td>
<td>${edelMetallPreise[7].veranderung}</td>
</tr>
<tr>
<td>${edelMetallPreise[8].name}</td>
<td>${edelMetallPreise[8].preiseGramEuro}</td>
<td>${edelMetallPreise[8].veranderung}</td>
</tr>
</table>`
document.getElementById('table').style.border = '1px solid black'
document.getElementById('table').style.textAlign = 'center'
document.getElementById('table').style.borderCollapse = 'collapse'


// LEVEL 2-2


const singers = [
  { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
  { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
  { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
  { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
  { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
  { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
  { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
  { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];


console.log(singers.sort((a, b) => { a < b }));
