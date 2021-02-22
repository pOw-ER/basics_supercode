// LEVEL 2-1

let imageArray2 = () => {
  let retArray2 = []
  for (let i = 1; i <= 100; i++) {
    if (i < 10) {
      retArray2.push('image_00' + i);
    } else if (i >= 10 && i < 100) {
      retArray2.push('image_0' + i);
    } else {
      retArray2.push('image_' + i);
    }
  }
  console.log(retArray2);
}

imageArray2();

// LEVEL 2-2

let loop = document.getElementById('loop');
let number = document.getElementById('number')

loop.style.fontSize = "32px"

let loopMe = () => {
  let arrayLoop = ["L", "p"]
  if (number.value == 0 || number.value == "") {
    loop.style.color = "red"
    loop.innerHTML = "ERROR"
  } else if (number.value % 2 == 0) {
    loop.style.color = "green"
    for (let i = 0; i < number.value; i++) {
      arrayLoop.splice(1, 0, "o")
    }
    loop.innerHTML = arrayLoop.join("")
  } else {
    loop.style.color = "green"
    for (let i = 0; i < number.value; i++) {
      if (i % 2 == 0) {
        arrayLoop.splice(1, 0, "o")
      } else {
        arrayLoop.splice(1, 0, "0")
      }
    }
    loop.innerHTML = arrayLoop.join("")
  }

}
