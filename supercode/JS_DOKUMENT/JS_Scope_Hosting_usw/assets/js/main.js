// // if (true == true) {
// //     console.log("1");
// // } else if (true) {
// //     console.log("2");
// // } else {
// //     console.log("3");
// // }
// // switch (true) {
// //     case true:
// //         console.log("1");
// //         break;

// //     default:
// //         console.log("2");
// // }

// // 3 types:
// //Declaration notation
// function square(x) {
//     console.log(x * x);
// }
// square(2)

// // functions as value
// let square1 = function (x) {
//     console.log(x * x);
// }
// square1(2)
// //ounce to gram
// //Formula:	for an approximate result, multiply the mass value by 28,35

// let ounceToGram = function (o) {
//     console.log(o + " ounce is " + o * 28.35 + " gram")
// }
// ounceToGram(10)

// //Arrow Functions (ES6)
// let square3 = (x) => {
//     console.log(x * x);
// }
// square3(2)
// let kgToGram = (kg) => {
//     console.log(kg + " kg is " + kg * 1000 + " gram")
// }
// kgToGram(2)
// // surface 1 : notation declaration
// function surface1(h, w) {
//     console.log(h * w);
// }
// // surface 2 : function as value
// let surface2 = function (h, w) {
//     console.log(h * w);
// }
// // surface 3 : Arrow function
// let surface3 = (h, w) => {
//     console.log(h * w);
// }


// // return 
// // end the function
// // give something back
// console.log('hi')

// function sayHi() {
//     return "hi"
// }
// let hello = sayHi()
// console.log(hello)
// console.log(sayHi())


// let fall2_2021 = (zVE) => {
//     let y = (zVE - 9.744) / 10000
//     return (995.21 * y + 1400) * y
// }
// let fall2 = (zVE, a, b, c) => {
//     let y = (zVE - a) / 10000
//     return (b * y + c) * y
// }


// let zVE1 = 10000
// let single = true
// let ESt
// let year = 2020
// if (single && zVE1 > 9754 && zVE1 <= 14753) {
//     if (year == 2021) {
//         ESt = fall2(zVE1, 9744, 995.21, 1400).toFixed(2)
//     } else if (year == 2020) {
//         ESt = fall2(zVE1, 9408, 972.87, 1400).toFixed(2)
//     }
//     console.log(ESt);
// }
// console.log("-------------");
// function sayHello() {
//     console.log('hi');
//     return "hola"
//     console.log("hello")
// }
// let hello1 = sayHello()
// console.log(hello1)


// //Arrow Functions
// let sayWhat = () => "Say What";
// let sayWhat1 = () => {

//     return "Say What";
// }
// let say4 = sayWhat()
// console.log(say4);
// let checkSingle = (zVE1) => single && zVE1 > 9754 && zVE1 <= 14753 ? ESt = fall2(zVE1, 9744, 995.21, 1400).toFixed(2) : null

// // console.log(checkSingle(10000));

// function show() {
//     console.log("test");


// }
// let show1 = () => {
//     console.log("hello");
// }

// show(2, 2, 2)
// show1()
// //This : in function=> window object
// //This : in object => object
// function clickMe() {
//     console.log(this);
// }

//Hoisting

console.log(num1)
num1 = 5
console.log(num1)
var num1;

sayHi()
function sayHi() {
    console.log(' Hi');
}


//Browser engine Interpretation
// var num1;
// function sayHi() {
//     console.log(' Hi');
// }

// num1 = 5
// console.log(num1)
// sayHi()
//blocking syntax
// num2 = 2
// let num2

// console.log(num2)

// unblocking syntax
console.log("test");

try {
    num2 = 2
    let num2
    console.log(num2)
} catch (err) {
    console.log(err.name);
    console.log(err.message)
}
console.log("test");

//global
//local scope
//we are in the global scope
if (true) {
    //
    console.log('local scope_1');
}
function hello() {
    console.log('function scope')
    hola()
    console.log("local scope _ 2")
    function hola() {
        console.log('hola');
    }
    if (true) {
        console.log("block scope")
    }
    switch (true) {
        case true:
            console.log("block scope")
    }
}
hello()
// hola() :reference error : hola function live in the local scope from hello function

//local scope => scope *2
//function scope + block scope 

console.log("-------");
let foo = "outside"
console.log(foo) //outside
if (true) {
    let foo = "inside"
    console.log(foo); //inside
}
console.log(foo); //outside
console.log("-------");
const foo1 = "outside"
console.log(foo1);
if (true) {
    let foo1 = "inside"
    console.log(foo1);
}
console.log(foo1);
console.log("-------");
var foo2 = "outside"
console.log(foo2);
if (true) {
    var foo2 = "inside"
    console.log(foo2);
}
console.log(foo2);



let sayHola = function () {
    console.log("sayHola")

}
sayHola()

// if (true) {
//     var orange = "orange"
//     console.log(orange);
// }
// console.log(orange);



var fruit = "apple"
console.log(fruit); //apple

function fruits() {
    var fruit = "banana"
    console.log(fruit); //banana
    if (true) {
        var fruit = "orange"
    }
    console.log(fruit); //orange
}

fruits()
console.log(fruit); //apple