// LEVEL 3-1
let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil",`

let array1 = []
let text100;

function textTeilen() {
  for (i = 0; i <= text.length / 100; i++) {
    text100 = text.slice(100 * i, 100 * (i + 1));
    array1.push(`${text100} - ${i + 1} of 27`);
  }
  console.log(array1);
}
textTeilen();

// LEVEL 3-2
let numArr = [5, 22, 15, 100, 55]
let result = document.getElementById('result')
result.innerHTML = ""
for (let i = 2; i < 1000; i++) {
  numArr.map(x => x % i === 0 ? result.innerHTML += `<p>${x} lasst sich durch ${i} teilen. Das Ergebnis ist ${x / i}</p>` : null)
}

// LEVEL 3-4

let max = document.getElementById('max')
let first = document.getElementById('first')
let second = document.getElementById('second')
let ergebnis = document.getElementById('ergebnis')
let secondSumme = 0;
let firstSumme = 0;

let count = () => {
  ergebnis.innerHTML = ""
  secondSumme = 0;
  firstSumme = 0;
  if (max.value == 0 || max.value == "" || first.value === second.value) {
    ergebnis.style.fontSize = "12px"
    ergebnis.style.color = "red"
    ergebnis.innerHTML = "bitte geben Sie eine max Nummer ein, die größer als eins ist. Erste und Zweite Zahl sollte nicht gleich sein"
    console.log(0);
  }
  else {
    for (let i = 2; i < max.value; i++) {
      if (second.value * i < max.value) {
        secondSumme += second.value * i
      }
      if (first.value * i < max.value) {
        firstSumme += first.value * i
      }
    }
    ergebnis.style.fontSize = "24px"
    ergebnis.style.color = "blue"
    let nummer1 = Number(first.value) + Number(second.value) + Number(firstSumme) + Number(secondSumme)
    ergebnis.innerHTML = nummer1;
  }
}
