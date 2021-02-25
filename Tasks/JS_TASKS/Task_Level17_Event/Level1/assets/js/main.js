
// LEVEL 1-5
let button = document.getElementById('clickme')
let anzahl = 0;

button.addEventListener('click', (e) => {
  button.innerHTML = `Click me: ${anzahl}`
  anzahl++;
})

// LEVEL 1-6

let select = document.getElementById('my-select')
let p = document.getElementById('option-selected')

select.addEventListener('change', (e) => {
  p.innerHTML = `Sie haben ${e.target.value} ausgewählt`
})












