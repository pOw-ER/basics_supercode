// Level 1-1
console.log('Start Warten für 3 Sekunden...');
let text = () => {
  console.log('Erledigt. Du hast 3 Sekunden verschwendet');
}

setTimeout(text, 3000)

let showTime = () => {
  let date = new Date()
  console.log(date.toLocaleTimeString());
}

// setInterval(showTime, 1000)
let a = 10;
let timeBack = () => {

  if (a > 0) {
    console.log(a);
  } else {
    console.log('Endlich Feierabend');
  }
  a--
}

let b = setInterval(timeBack, 1000)
setTimeout(() => {
  clearInterval(b)
}, 11000)
// document.body.addEventListener('keydown', (e) => {
//   if (e.code == 'Enter') {
//     clearInterval(b)
//   }
// })

// LEVEL 1-2

let prozent = document.getElementById('prozent')
let btn = document.getElementById('btn')
let number = 100;
let set;

btn.addEventListener('click', () => {
  let runterZahl = () => {
    number--
    prozent.innerHTML = `${number}%`
    if (number === 0) {
      clearInterval(set);
      set = 0;
    }
  }
  set = setInterval(runterZahl, 100)

})

// LEVEL 2-1
