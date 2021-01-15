function changeBackground(){
  let valueRed = document.getElementById('red').value;
  let valueGreen = document.getElementById('green').value;
  let valueBlue = document.getElementById('blue').value;
  let rgbFürBgc = "rgb("+valueRed+","+ valueGreen+","+ valueBlue+")"
  document.body.style.backgroundColor = rgbFürBgc;
}
