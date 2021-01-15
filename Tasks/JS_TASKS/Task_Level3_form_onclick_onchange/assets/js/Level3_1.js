function changeFontSize() {
  let rangeValue= document.getElementById('size').value;
  let px = rangeValue+"px"
  let headlineText = document.getElementById('headline');
  let fontOfText = document.getElementById('fonts').value;
  headlineText.innerHTML = document.getElementById('text').value;
  headlineText.style.fontSize= px;
  headlineText.style.fontFamily = fontOfText;
}
