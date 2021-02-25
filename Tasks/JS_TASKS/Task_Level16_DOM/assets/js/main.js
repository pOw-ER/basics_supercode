// LEVEL 1-2
let tags = document.getElementsByClassName('example')

let myFunction = () => {
  for (let i = 0; i < tags.length; i++) {
    tags[i].style.backgroundColor = 'black'
    tags[i].style.color = 'white'
  }
}

// LEVEL 2-3

let navHome = document.getElementById('navHome')
let navNews = document.getElementById('navNews')
let navContact = document.getElementById('navContact')
let navChange = document.getElementById('navChange')

let changeColor = () => {
  navHome.style.background = "#f6c89f"
  navNews.style.background = "#4b8e8d"
  navContact.style.background = "#ffe7d1"
  navChange.style.background = "#396362"
}

// LEVEL 2-2

let vorname = document.getElementById('vorname')
let nachname = document.getElementById('nachname')
let land = document.getElementById('land')
let submit = document.getElementById('submit')
submit.addEventListener("click", (e) => {
  let data = `Full name: ${vorname.value} ${nachname.value}, Land : ${land.value}`
  console.log(data);
  e.preventDefault();
})

// LEVEL 2-4
let button = document.getElementById('button')
let select = document.getElementById('farbeAuswahlen')

button.addEventListener('click', (e) => {
  let farbe = select.value.toLowerCase().split(" ").toString().replace(",", "")
  console.log(farbe);
  document.body.style.background = `${farbe}`
  e.preventDefault();
})

