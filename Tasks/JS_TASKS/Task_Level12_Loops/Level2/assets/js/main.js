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
loop.style.color = "green"
loop.style.fontSize = "32px"

let loopMe = () => {
  let arrayLoop = ["L", "p"]
  for (let i = 0; i < number.value; i++) {
    arrayLoop.splice(1, 0, "o")
  }
  loop.innerHTML = arrayLoop.join("")
}
