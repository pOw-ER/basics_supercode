let div = document.getElementById('firstDiv')
let divArray = [];
let counter = 0;

let numberPlay = () => {
  let div1 = document.createElement('div')
  div1.appendChild(document.createTextNode(counter))
  div.appendChild(div1)
  if (counter % 10 === 0 || counter === 0) {
    div1.classList.add('weiss')
  } else {
    div1.classList.remove('weiss')
    div1.classList.add('rechteck')
  }
  counter++
}
