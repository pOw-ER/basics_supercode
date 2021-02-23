// LEVEL 1-1
let europäischeUnion = {
  Belgien: "(BE)",
  Griechenland: "(EL)",
  Litauen: "(LT)",
  Portugal: "(PT)",
  Bulgarien: "(BG)",
  Spanien: "(ES)",
  Luxemburg: "(LU)",
  Rumänien: "(RO)",
  Tschechien: "(CZ)",
  Frankreich: "(FR)",
  Ungarn: "(HU)",
  Slowenien: "(SI)",
  Dänemark: "(DK)",
  Kroatien: "(HR)",
  Malta: "(MT)",
  Slowakei: "(SK)",
  Deutschland: "(DE)",
  Italien: "(IT)",
  Niederlände: "(NL)",
  Finnland: "(FI)",
  Estland: "(EE)",
  Zypern: "(CY)",
  Österreich: "(AT)",
  Schweden: "(SE)",
  Irland: "(IE)",
  Lettland: "(LV)",
  Polen: "(PL)",
  VereinigtesKönigreich: "(UK)"
}

console.log(europäischeUnion);
console.log(europäischeUnion.Belgien, europäischeUnion.Niederlände, europäischeUnion.Luxemburg);
europäischeUnion.BeneluxUnion = {
  Belgien: "(BE)",
  Niederlände: "(NL)",
  Luxemburg: "(LU)"
}
delete europäischeUnion.Belgien
delete europäischeUnion.Niederlände
delete europäischeUnion.Luxemburg


// LEVEL 1-2

let person = {
  name: "Enes",
  alter: 31,
  sagNameAlter() {
    alert(`${this.name} ist ${this.alter} Jahre alt.`)
  }
}
person.sagNameAlter()
console.log(person.name);
console.log(person.alter);

// Level 1-4

let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: [
      "Gipsy",
      "Nala",
      "Dinky"
    ]
  },
  {
    tiertyp: "Hunde",
    names: [
      "Knöpfchen",
      "Pinselchen",
      "Droopy"
    ]
  }
];

console.log(unsereHaustiere[0].names[1]); // Nala
console.log(unsereHaustiere[1].names[2]); // Droopy
console.log(unsereHaustiere[1].names);

function nameÄndern(alt, neu) {
  if (unsereHaustiere[1].names.includes(alt)) {
    let index = unsereHaustiere[1].names.indexOf(alt)
    unsereHaustiere[1].names.splice(index, 1, neu)
  } else {
    alert('so genannte Hund haben wir nicht')
  }
}
// nameÄndern("Enes", "d")
nameÄndern("Droopy", "Duman")
console.log(unsereHaustiere[1].names);


// LEVEL 1-5

let unserLager = {
  schreibtisch: {
    schublade: "Hefter"
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "eine Datei",
      Ordner2: "Geheimnisse"
    },
    "Untere Schublade": "Cola"
  }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2); // Geheimnisse
console.log(unserLager.schrank["Untere Schublade"]) // Cola
console.log(unserLager.schreibtisch.schublade) // Hefter

// LEVEL 1-6

let myMusic = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true
  },
  {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true
  }
];
myMusic.push({
  kunstler: "Eminem",
  title: "Lose Yourself",
  release_jahr: 2006,
  formate: ["LP", "CD", "MC", "Download"],
  gold: true
})
console.log(myMusic);
console.log(myMusic[0].kunstler); //The Beatles
console.log(myMusic[1].formate[3]); //Download
console.log(myMusic[1].gold); //True
console.log(myMusic[2].release_jahr + " und " + myMusic[3].release_jahr); //1971 und 1983
console.log(myMusic[3].formate[2]); //MC
console.log(myMusic[3].title.substr(17, 4)); //Ride
console.log(myMusic[2].title.substr(13)); //IV
console.log(myMusic[1].kunstler.substr(5)); //Floyd

// LEVEL 1-7

let myMusic1 = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true
  },
  {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true
  }
];

myMusic1.forEach(x => document.write(`${x.kunstler} <br> ${x.title} <br> ${x.formate} <br>  ${x.release_jahr > 1975 ? `${x.release_jahr} <br><br>` : `<br>`}`));

// LEVEL 1-8

let studentData = [
  {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
      street: "Don Valley Business Park",
      city: "Toronto",
      postalCode: "ONM3C3E5"
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"]
  },
  {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
      street: "34 Lawrence Ave",
      city: "Toronto",
      postalCode: "ONM3C0E5"
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"]
  }
];

studentData.forEach(x => document.write(`${x.name} <br> ${x.coop} <br> ${x.address.city} <br> ${x.emails}<br><br>`))
