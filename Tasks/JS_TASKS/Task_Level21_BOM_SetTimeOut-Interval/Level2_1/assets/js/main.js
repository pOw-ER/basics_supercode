let message = document.querySelector('.message')
let count = document.getElementById('count')
let counter = 9;
let set;

window.onload = () => {
  let runter = () => {
    count.innerHTML = `${counter}`

    if (counter < 0) {
      clearInterval(set)
      document.body.innerHTML = ""
      setTimeout(() => {
        // window.location.reload()
      }, 1000)
    }
    counter--
  }

  set = setInterval(runter, 1000)
}

