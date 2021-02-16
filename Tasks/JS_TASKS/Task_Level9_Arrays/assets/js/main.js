// Level 1-1-1
let myAddress = ["Servatiusstraße", 44369, "Dortmund", "NRW"]
let besteFreunde = ["Steffen", "Onder", "Afrae"]
let person = ["Enes", "Yilmaz", 31, "Fußball", "Istanbul", "Supercode"]

// console.log(myAddress);
// console.log(besteFreunde);
// console.log(person);

person.push(myAddress, besteFreunde);
console.log(person);
console.log(person.slice(0, 6) + ", " + person[6] + ", " + person[7]);

// Level 1-1-2
console.log(person.length);
console.log(myAddress.length);
console.log(besteFreunde.length);

// Level 1-2

let meineTrainer1 = ["Georg", "Anass", "Elanie", "Hakan"]
let meineTrainer2 = new Array("Georg", "Anass", "Elanie", "Hakan")
let meineTrainer3 = new Array();

meineTrainer3[0] = "Georg";
meineTrainer3[1] = "Anass";
meineTrainer3[2] = "Elaine";
meineTrainer3[3] = "Hakan";


console.log(meineTrainer1);
console.log(meineTrainer2);
console.log(meineTrainer3);

// Level 1-3
let numberArray = [5, 6, 7, 8, 9, 10]
console.log(numberArray);
console.log(numberArray[4]);
console.log(numberArray[0]);
console.log(numberArray[5]);

// Level 1-4
let meinText1 = "Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag."
let meinText2 = "Wie geht es dir heute?"
let meinText3 = "Heute ist ein großer Tag für uns."

console.log(meinText1.split()); // copy meinText1
console.log(meinText1.split("")); // jede buchtabe
console.log(meinText1.split(" ")); // jede wort
console.log(meinText2.split()); // copy meinText1
console.log(meinText2.split("")); // jede buchtabe
console.log(meinText2.split(" ")); // jede wort
console.log(meinText3.split()); // copy meinText1
console.log(meinText3.split("")); // jede buchtabe
console.log(meinText3.split(" ")); // jede wort

// Level 1-5-1
let songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"]
songs.push("Sweet Child O'Mine")
console.log(songs);

let besteFussballerAllerZeiten = ["ozil", "zidane", "ronaldo", "messi", "neymar"]
besteFussballerAllerZeiten.push("altay", "rüstü", "volkan")
console.log(besteFussballerAllerZeiten);

const artists = ["michael", "elvis"];
artists.push("justin", "charlie");
console.log(artists);

// Level 1-5-2
let heroUndEnemy = [["Batman", "The Joker"], ["Professor X", "Magneto"], ["Thor", "Loki"], ["Superman", "Lex Luthor"], ["Wolverine", "Sabretooth"], ["Ghost Rider", "Mephisto"]]

console.log(heroUndEnemy);

// Level 1-6
let entfernteSong = songs.pop();
console.log(songs);
console.log(entfernteSong);
let entfernteFußballer = besteFussballerAllerZeiten.pop();
console.log(besteFussballerAllerZeiten);
console.log(entfernteFußballer);

besteFussballerAllerZeiten.pop();
besteFussballerAllerZeiten.pop();
besteFussballerAllerZeiten.pop();
console.log(besteFussballerAllerZeiten);

// Level 1-7

let deutscheGerichte = ["Speckkuchen", "Thüringer", "Rostbratwurst", "Quarkkeulchen", "Sauerbraten"]
deutscheGerichte.unshift("pommes", "a", "b", "c", "d")
console.log(deutscheGerichte);

// Level 1-8
let nichtGut = []

nichtGut.push(deutscheGerichte.shift(), deutscheGerichte.shift(), deutscheGerichte.shift())
console.log(nichtGut);
console.log(deutscheGerichte);

// Level 1-9

let array1 = [23, 54, 75]
array1.push(1, 2, 3, 4, 5)
array1.unshift(6, 7, 8, 9, 10)
array1.pop();
array1.pop();
array1.shift();
array1.shift();
console.log(array1);

// Level 1-10

let arrayImg = [
  "imageTeilnehmer000supercode.jpg",
  "imageTeilnehmer001supercode.jpg",
  "imageTeilnehmer002supercode.jpg",
  "imageTeilnehmer003supercode.jpg",
  "imageTeilnehmer004supercode.jpg",
  "imageTeilnehmer005supercode.jpg",
  "imageTeilnehmer006supercode.jpg",
  "imageTeilnehmer007supercode.jpg",
  "imageTeilnehmer008supercode.jpg",
  "imageTeilnehmer009supercode.jpg",
  "imageTeilnehmer010supercode.jpg",
  "imageTeilnehmer011supercode.jpg",
  "imageTeilnehmer012supercode.jpg",
  "imageTeilnehmer013supercode.jpg",
  "imageTeilnehmer014supercode.jpg",
  "imageTeilnehmer015supercode.jpg",
  "imageTeilnehmer016supercode.jpg",
  "imageTeilnehmer017supercode.jpg",
  "imageTeilnehmer018supercode.jpg",
  "imageTeilnehmer019supercode.jpg"
];
let gelöschtenImgs = []
gelöschtenImgs.push(arrayImg.splice(4, 4))
console.log(arrayImg);
console.log(gelöschtenImgs);

let gelöschtenImgs2 = []
gelöschtenImgs2.push(arrayImg.splice(6, 5))
console.log(arrayImg);
console.log(gelöschtenImgs2);

let gelöschtenImgs3 = []
gelöschtenImgs3.push(arrayImg.splice(2))
console.log(arrayImg);
console.log(gelöschtenImgs3);

// Level 1-11
var arrayss = ["imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg"];
arrayss.splice(2, 0, "imageTeilnehmer008supercode.jpg",
  "imageTeilnehmer009supercode.jpg",
  "imageTeilnehmer010supercode.jpg")
console.log(arrayss);

arrayss.splice(2, 0, "imageTeilnehmer014supercode.jpg",
  "imageTeilnehmer015supercode.jpg",
  "imageTeilnehmer016supercode.jpg",
  "imageTeilnehmer017supercode.jpg",
  "imageTeilnehmer018supercode.jpg",
  "imageTeilnehmer019supercode.jpg")
console.log(arrayss);

arrayss.splice(2, 0,
  "imageTeilnehmer002supercode.jpg",
  "imageTeilnehmer003supercode.jpg",
  "imageTeilnehmer004supercode.jpg",
  "imageTeilnehmer005supercode.jpg",
  "imageTeilnehmer006supercode.jpg",
  "imageTeilnehmer007supercode.jpg",
  "imageTeilnehmer011supercode.jpg",
  "imageTeilnehmer012supercode.jpg",
  "imageTeilnehmer013supercode.jpg",
)
console.log(arrayss);
// Level 1-12

let lastArray = [
  "imageTeilnehmer000supercode.jpg",
  "imageTeilnehmer001supercode.jpg",
  "imageTeilnehmer002supercode.jpg",
  "imageTeilnehmer003supercode.jpg",
  "imageTeilnehmer004supercode.jpg",
  "imageTeilnehmer005supercode.jpg",
  "imageTeilnehmer006supercode.jpg",
  "imageTeilnehmer007supercode.jpg",
  "imageTeilnehmer008supercode.jpg",
  "imageTeilnehmer009supercode.jpg",
  "imageTeilnehmer010supercode.jpg",
  "imageTeilnehmer011supercode.jpg",
  "imageTeilnehmer012supercode.jpg",
  "imageTeilnehmer013supercode.jpg",
  "imageTeilnehmer014supercode.jpg",
  "imageTeilnehmer015supercode.jpg",
  "imageTeilnehmer016supercode.jpg",
  "imageTeilnehmer017supercode.jpg",
  "imageTeilnehmer018supercode.jpg",
  "imageTeilnehmer019supercode.jpg"
];

let lastArray2 = lastArray.slice();

console.log(lastArray);// gleich mit lastArray2
console.log(lastArray2);

let copyImg1 = lastArray.slice(7, 15);
console.log(lastArray); // gleich mit allen bildern
console.log(copyImg1); // neue Array mit 8 Elemente (7-14)

let copyImg2 = lastArray.slice(6, 12);
console.log(lastArray); // gleich mit allen bildern
console.log(copyImg2); // neue Array mit 8 Elemente (6-11)

