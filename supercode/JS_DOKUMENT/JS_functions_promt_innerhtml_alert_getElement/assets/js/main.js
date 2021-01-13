// let myNumber = 34
// console.log(myNumber)
// let myText = "Hello world"
// console.log(myText)
// let isShowTime = true
// console.log(isShowTime)

// let $myVar, _myVar, myVar, myvar

// += :  x+=y  => x=x+y    newValue=oldvalue + something
// -= *= /=
//x++ x--: x=x+1 x=x-1
//20%2 =0
//10%3 =1
//10=3*3 +1
//6763434%2 = 0  gerade Js
//98877%2=1  ungerade Js
//2n : gerade css
//2n+1 :ungerade css
// console.log()  document.write()
//let var const
//Assignement Symbol: =
//Comparison
// == :compare the value
// === : compare value and type
// console.log(3 == 3)
// console.log(4 == 3)
// console.log(3 === 3)
// console.log(4 === 3)
// console.log('4' == 4)
// console.log('4' === 4)
// console.log(true == 1)
// console.log(true === 1)
// console.log(true == 34)
// console.log(false == 0) //true
// console.log(false === 0) // false
// console.log('four' == 4) //false

// ! :not nicht
// != :not equal
// !== :not equal type
// console.log(3 != 2) //true
// console.log(3 != "3") //false
// console.log(3 !== "3") //true
// console.log(1 != false) // true
// console.log(0 !== true) // true

// console.log(!true)
// console.log(!false)

// // > : greater than
// // <: less than
// // >=: greater than or equal to
// // <=: less than or equal to

// console.log(40 > 30) //true
// console.log(30 > 30) //false
// console.log(1 >= true) // true
// console.log(1 >= false) // true
// console.log(3 < 3) //false
// console.log(3 <= 3) //true

// console.log("A" == 'A') //true
// console.log('Ab' == 'Ac') // false
// console.log('contact' == 'contacts') //false

// console.log('Z' > 'A') // true
// console.log('a' > 'A')
// console.log('Weirdo:')
// //strange Stuff
// console.log(null > 0) //false
// console.log(null == 0) //false
// console.log(null >= 0) //true

// //JS output
// alert('Hi')
// window.alert('Hello')
document.write('<h1 style="text-align:center;">Hi</h1>')


// innerHTML
let text = document.getElementById('text')
console.log(text)
text.innerHTML = "test"

document.getElementById('name').innerHTML = "Micky"

//
console.log(document.getElementById('name'))  // <h1 id="name">Micky</h1>
console.log(document.getElementById('name').innerHTML) // Mickey

document.getElementById('name').innerHTML += " Mouse"
document.getElementById('name').innerHTML = document.getElementById('name').innerHTML + " Mouse"
document.getElementById('content').innerHTML = "<figure><img src='https://unsplash.it/300' alt=''><figcaption><h2>Author Picture</h2></figcaption></figure>"
document.write("test")


//Interacation with the browser
//prompt
// let nameHero = prompt("give your name")
// let age = prompt("give your age")
// let city = prompt("give your city")
//let age =20
// console.log('age is ' + age)
// document.getElementById("description").innerHTML = "I am " + nameHero + " from " + city + " and " + age + " years old"
// let checkIfYouAreCool = confirm('Are you Cool?')
// console.log(checkIfYouAreCool)

//functions

//function declaration
//

function sayHi() {
    console.log("hi")
}

//function call
sayHi()
sayHi()

function addTwoNumbers(a, b) {
    console.log(a + b)
}
addTwoNumbers(2, 8)
function multiplyNumbers(a, b, c) {
    console.log(a * b * c)
    document.getElementById("result").innerHTML = a * b * c
    document.write(a * b * c)
}
multiplyNumbers(2, 2, 2)

function cmNachInch(cm) {
    console.log(cm * 0.3937)
}
cmNachInch(10)
function inchNachCm(inch) {
    console.log(inch * 2.54)
}
inchNachCm(10)
