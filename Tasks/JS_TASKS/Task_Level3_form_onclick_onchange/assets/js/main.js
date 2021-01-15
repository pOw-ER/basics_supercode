function multipeInput (){
  let numberInput = document.getElementById('number').value;
  let multipleInput= numberInput*2
  document.getElementById('result').innerHTML = multipleInput;
  document.getElementById('number').value= ""
}

// LEVEL 1_2
function calculateAge() {
  let yearOfBirth = document.getElementById('number1').value;
  let year = new Date();
  let actuelYear = year.getFullYear();
  let ageOfUser = actuelYear - yearOfBirth;
  document.getElementById('showAge').innerHTML = ageOfUser;
  document.getElementById('number1').value= ""
}


// LEVEl 1_3

function calculateDifference() {
  let age1 = document.getElementById('alter1').value;
  let age2 = document.getElementById('alter2').value;
  let diffAge = age1 - age2;
  document.getElementById('showDifference').innerHTML = diffAge;
  document.getElementById('alter1').value = ""
  document.getElementById('alter2').value = ""
}



