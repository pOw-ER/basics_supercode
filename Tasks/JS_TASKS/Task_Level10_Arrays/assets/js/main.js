// Level 1-1

let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift"
];

let sortierung = () => {
  return console.log(languages.sort());
}
sortierung();

// Level 1-2
let sortierung2 = () => {
  return console.log(languages.sort().reverse());
}
sortierung2();

// Level 2-1

function string_reverse(str) {
  if (str.includes(" ")) {
    let strAll = "";
    let strFirst = str.split(" ")
    for (let i = 0; i < strFirst.length; i++) {
      strAll += strFirst[i].split("").reverse().join("") + " "
    }
    console.log(strAll);
  }
  else {
    console.log(str.split("").reverse().join(""));
  }

}

string_reverse('Sergio');
string_reverse('Hannah');
string_reverse('Regallager');
string_reverse('Reliefpfeiler');
string_reverse('Rentner');
string_reverse('Ella mag alle Bohnen');
string_reverse('han nesaH has ennaH');
string_reverse('Nie solo sein');

// Level 2-2

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

function sortierung4(a, b) {
  return a - b;
}

console.log(numArray2.sort(sortierung4));

// Level 1-13

let meinText1 = ["Hello", "World"]
let meinText2 = ["Anass", "Elaine", "Eric", "Georg"]
let meinText3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"]

let join11 = meinText1.join();
let join12 = meinText1.join("");
let join13 = meinText1.join(" ");
let join14 = meinText1.join("+");
console.log(join11);
console.log(join12);
console.log(join13);
console.log(join14);

let join21 = meinText2.join();
let join22 = meinText2.join("");
let join23 = meinText2.join(" ");
let join24 = meinText2.join("+");
console.log(join21);
console.log(join22);
console.log(join23);
console.log(join24);
let join31 = meinText3.join();
let join32 = meinText3.join("");
let join33 = meinText3.join(" ");
let join34 = meinText3.join("+");
console.log(join31);
console.log(join32);
console.log(join33);
console.log(join34);
