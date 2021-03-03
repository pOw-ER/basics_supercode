let days = document.getElementById('days')
let hours = document.getElementById('hours')
let seconds = document.getElementById('seconds')
let minutes = document.getElementById('minutes')
let set;
let restOfBirthday = (year, month, day) => {
  let calculate = () => {
    let date = new Date();
    let birthday = new Date(year, month - 1, day)
    let miliDate = date.getTime()
    let miliBirthday = birthday.getTime()
    let milisecond = miliBirthday - miliDate
    let dayOhneFloor = milisecond / 1000 / 60 / 60 / 24
    let dayOfRest = Math.floor(dayOhneFloor)
    let hourOfRest = Math.floor([(dayOhneFloor) - Math.floor(dayOhneFloor)] * 24)
    let minuteOfRest = Math.floor(([(dayOhneFloor) - Math.floor(dayOhneFloor)] * 24 - hourOfRest) * 60)
    let secondOfRest = Math.floor([(([(dayOhneFloor) - Math.floor(dayOhneFloor)] * 24 - hourOfRest) * 60) - minuteOfRest] * 60)
    days.innerHTML = dayOfRest.toLocaleString("de-DE", { minimumIntegerDigits: 2 })
    hours.innerHTML = hourOfRest.toLocaleString("de-DE", { minimumIntegerDigits: 2 })
    minutes.innerHTML = minuteOfRest.toLocaleString("de-DE", { minimumIntegerDigits: 2 })
    seconds.innerHTML = secondOfRest.toLocaleString("de-DE", { minimumIntegerDigits: 2 })
  }
  set = setInterval(calculate, 1000)
}
restOfBirthday(2022, 1, 15)
