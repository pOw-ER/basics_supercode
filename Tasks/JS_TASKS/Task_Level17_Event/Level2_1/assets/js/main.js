let grauTaste = document.getElementById('grauTaste')
let weissTaste = document.getElementById('weissTaste')
let blauTaste = document.getElementById('blauTaste')
let gelbTaste = document.getElementById('gelbTaste')

grauTaste.addEventListener('click', () => {
  document.body.style.background = "grey"
  document.body.style.color = "white"
})
weissTaste.addEventListener('click', () => {
  document.body.style.background = "white"
  document.body.style.color = "black"
})
blauTaste.addEventListener('click', () => {
  document.body.style.background = "blue"
  document.body.style.color = "white"
})
gelbTaste.addEventListener('click', () => {
  document.body.style.background = "yellow"
  document.body.style.color = "black"
})
