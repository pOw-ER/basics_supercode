let minutes = document.getElementById('minutes')
let minute = document.getElementById('minute')
let seconds = document.getElementById('seconds')
let sec;
let min;
let set;

let startMinCountdown = () => {
  min = minutes.value;
  sec = 0;
  let decrement = () => {
    if (sec === 0 && min > 0) {
      sec = 60
      min--
    }
    sec--
    if (min == 0 && sec == 0) {
      clearInterval(set)
      minute.innerHTML = 00
      seconds.innerHTML = 00
    }
    minute.innerHTML = min.toLocaleString("de-DE", { minimumIntegerDigits: 2 })
    seconds.innerHTML = sec.toLocaleString("de-DE", { minimumIntegerDigits: 2 })
  }
  set = setInterval(decrement, 1000)
}

let pauseMinCountdown = () => {
  clearInterval(set)
  minute.innerHTML = min.toLocaleString("de-DE", { minimumIntegerDigits: 2 });
  seconds.innerHTML = sec.toLocaleString("de-DE", { minimumIntegerDigits: 2 });
}

let restartMinCountdown = () => {
  let decrement = () => {
    if (sec === 0 && min > 0) {
      sec = 60
      min--
    }
    sec--
    if (min == 0 && sec == 0) {
      clearInterval(set)
      minute.innerHTML = 00
      seconds.innerHTML = 00
    }
    minute.innerHTML = min.toLocaleString("de-DE", { minimumIntegerDigits: 2 })
    seconds.innerHTML = sec.toLocaleString("de-DE", { minimumIntegerDigits: 2 })
  }
  set = setInterval(decrement, 1000)
}
