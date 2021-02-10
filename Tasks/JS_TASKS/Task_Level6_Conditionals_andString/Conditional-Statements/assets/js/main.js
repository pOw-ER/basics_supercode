// LEVEL 1_1
let text = document.getElementById('text')
let inputAge = document.getElementById('input-age')
let warnung = document.getElementById('warnung')

function adult(){
  if (inputAge.value == ""){
    warnung.style.display = "block"
  } else if (inputAge.value < 18){
    warnung.style.display = "none"
    text.innerHTML = "Minderjährig"
  }
  else if (inputAge.value >= 18){
    warnung.style.display = "none"
    text.innerHTML = "Volljährig"
  }
}

// LEVEL 1_2
let weatherRange = document.getElementById('weather-range')
let textWeather = document.getElementById('text-weather')

function weather() {
  document.getElementById('weather-value').innerHTML = weatherRange.value;
  if (weatherRange.value <3 && weatherRange.value>0){
    textWeather.innerHTML = "Weather is Schlecht"
  } else if (weatherRange.value <=5 && weatherRange.value>=3){
    textWeather.innerHTML = "Weather is okay"
  } else if (weatherRange.value <=7 && weatherRange.value>=6){
    textWeather.innerHTML = "Weather is gut"
  } else if (weatherRange.value <=10 && weatherRange.value>=8){
    textWeather.innerHTML = "Weather is super"
  }
}

weather();

// LEVEL 1_3

let input = document.getElementById('input')
let warnung1 = document.getElementById('warnung1')
let text2 = document.getElementById('text2')

function greaterThan(){
  if (input.value == ""){
    warnung1.style.display = "block";
  } else if (input.value < 18){
    warnung1.style.display = "none";
    text2.innerHTML = "Nein. Du darfst noch nicht Shisha rauchen";
  }
  else if (input.value >= 18){
    warnung1.style.display = "none";
    text2.innerHTML = "Ja. Du kannst Shisha rauchen";
  }
}
