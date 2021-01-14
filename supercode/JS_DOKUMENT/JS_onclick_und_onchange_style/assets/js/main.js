console.log(document.getElementById("headline"))
console.log(document.getElementById("headline").innerHTML)
document.getElementById("headline").innerHTML = "hola"
console.log(document.getElementById("headline").innerHTML)

//Declaration
function sayWhat() {
    console.log('say Whattt!!')
}
function greeting(firstName) {
    document.write('Hi ' + firstName)
}
//Calling
sayWhat()
greeting('Mickey')
greeting('Batman')
greeting('Spiderman')
console.log(document.getElementById("first-name"))
console.log(document.getElementById("first-name").innerHTML)
console.log(document.getElementById("first-name").value)
console.log(document.getElementById("points").value)
function getValueRange() {
    console.log(document.getElementById("points").value)
}
function getFirstName() {
    console.log(document.getElementById('first-name').value)
}
console.log(document.getElementById("moods"))
console.log(document.getElementById("moods").value)
function getValueMoods() {
    console.log(document.getElementById("moods").value)
}


function showForm() {
    console.log(document.getElementById('first').value)
    console.log(document.getElementById('last').value)
    console.log(document.getElementById('email').value)
    console.log(document.getElementById('gender').value)
}
console.log(document.getElementById('headline').style)
document.getElementById('headline').style.textAlign = "right"

function changeBackground() {
    document.getElementById('box').style.backgroundColor = "rgb(100,100,0)"
    document.getElementById('box').style.border = "10px solid #000"
}
