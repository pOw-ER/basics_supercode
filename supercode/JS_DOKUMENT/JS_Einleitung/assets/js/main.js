

//Comment in one line
/*Comment
multiple
line
*/

//1 JS output: console.log()
//data type:
//1-Number:
// console.log(3) //Statement of console.log of 3
// console.log(3 + 3)
// console.log(5 - 1)
// console.log(10 * 10)
// console.log(100 / 2)
// console.log(1.5)
// console.log(-40.56)
// console.log(4, 4)
// console.log(0, 3, 4, 7, 8, 9, 0, 455, 56)
//2-Text: String
//console.log(test) //False:
// console.log("test")
// console.log('hi')
// console.log('hello world')
//3- Boolean value
// console.log(true)
// console.log(false)

//Variables declaration
//var let const
//= : assignement
//Declaration + assignement
var num1 = 33
let num2 = 200
const num3 = 1000

var isOpen = false
let isClose = true
const isHappy = true

var firstName = "Micky"
let lastName = "Mouse"
const address = "Disneyland"

console.log(num3)
console.log(firstName)
console.log(isHappy)

//Declaration
// let age
// console.log(age)
// = assignement
// age = 20
// age = 30
// console.log(age)
// console.log('age is: ', age)


//myFirstName myLastName
// I am Mickey mouse , Ich bin Mickey mouse
let myFirstName = "Mickey"
let myLastName = "Mouse"
console.log('Ich bin', myFirstName, myLastName)

//Multiple variables declarations
let x, y, z
x = 23
y = 2
z = x * y
console.log(x, y, z)
//priceMilchMit, mehrwersteuer7, priceMilchOhne
//priceMilchMit=priceMilchOhne+priceMilchOhne*mehrwersteuer7
let mehrwersteuer7 = 0.07
let priceMilchOhne = 0.80
let priceMilchMit = priceMilchOhne + priceMilchOhne * mehrwersteuer7
console.log(priceMilchMit)
//bruttoMac, mehrwersteuer19, nettoMac
let nettoMac = 1000
let mehrwersteuer19 = 0.19
let bruttoMac
bruttoMac = nettoMac * (1 + mehrwersteuer19)

console.log(bruttoMac)


//Operators
// + - / *
//+=:     x+=y  =>x=x+y
x = 10
y = 5
console.log('x is', x)
console.log('y is', y)
x = x + y //15
x += y //20
//-= :  x-=y x=x-y
x -= 10 //10

x += 2 //x=x+2  x=10+2 //12
x -= y // x=7
x += 1 // x=7+1=8
y -= y // y=0
console.log(x)
console.log(y)

// *= x*=y x=x*y
// /= x/=y x=x/y
x = 8
x /= 2 //4
console.log(x)
x *= 3 //12
console.log(x)


// %:
console.log(11 % 4)
console.log(101 % 5) //1
console.log(20 % 3) //2


//Increment Decrement
//increment x++ => x+=1
//Decrement x-- => x-=1
x = 2
//False: console.log('x is', ++x)
x++
console.log('x is:', x)

// Text: Strings
let txt1 = "hello"
let txt2 = "world"
console.log(txt1)
console.log(txt2)
//String Concatenation
let hi = txt1 + " " + txt2
console.log(hi)
let give = "give"
let five = 5
console.log(five)
let giveMeFive = give + " " + five
console.log(giveMeFive)



//heroName=spiderman age=30 city=NYC
// I am spiderman, 30 years old and I live in NYC
let heroName = "spiderman"
let age = 30
let city = "NYC"
console.log("I am " + heroName + ", " + age + " years old and I live in " + city)

// case sensitive
let abc
let ABC

// underscore: _variable
let _actualYear = 2021
console.log(_actualYear)
// $
let $actualMonth = 'January'
console.log($actualMonth)

// let 3hi : False


//camelCase
let mynameissuperman //false
let myNameIsSuperman //true

//2.Js Output document.write()

let someText = "Welcome to the nerd zone my friend"

document.write(someText)
let headline = "<h1>Hello World</h1>"
document.write(headline)
document.write("<h2 style='color:tomato;text-align: center;'>TEST</h2>")
