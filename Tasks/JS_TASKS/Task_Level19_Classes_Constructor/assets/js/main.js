// LEVEL 1-1
class Ball {
  constructor(ballType) {
    if (ballType == undefined) {
      this.ballType = 'regular'
    } else {
      this.ballType = ballType
    }
  }

}

let ball1 = new Ball()
console.log(ball1.ballType);
let ball2 = new Ball('super')
console.log(ball2.ballType);

// LEvel 1-2
let result = document.getElementById('result')
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  info() {
    console.log(`${this.name} is ${this.age} years old`);
  }
  write() {
    if (exam.checked) {
      result.innerHTML += `<p>${this.name} is ${this.age} years old</p>`
    } else {
      result.innerHTML += `<p style="color:red">${this.name} is ${this.age} years old<p>`
    }

  }
}

let enes = new Person('enes', 30)
enes.info()
// enes.write()

// Level 1-3

let button = document.getElementById('button')
let name = document.getElementById('name')
let age = document.getElementById('age')
let exam = document.getElementById('exam')

button.addEventListener('click', () => {
  let person1 = new Person(name.value, age.value)
  person1.write()

})
