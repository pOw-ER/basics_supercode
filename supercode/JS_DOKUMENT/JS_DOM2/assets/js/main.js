
// //object collections
// // console.log('hello world')
// // console.log(document.documentElement.style.fontSize = "20px")

// // console.log(document.images)
// // console.log(document.anchors)

// // let myForm = document.forms.login
// // console.log(myForm)
// // console.log(myForm.elements)
// // console.log(myForm.elements.submit.value)
// // console.log(myForm.elements.firstname.value)

// //Walking through the DOM

// //getElementsByTagName => HTML COLLECTION
// //querySelectorAll => NodeList
// const liHtmlCollection = document.getElementsByTagName('li')
// const liNodeList = document.querySelectorAll('li')
// console.log("%c start_1", "color:tomato")
// console.log(liHtmlCollection)
// console.log(liNodeList)
// console.log("%c end_1", "color:tomato")
// //children
// console.log(document.body.children)
// console.log(document.body.children[1].children)
// document.body.children[1].innerHTML += "<li> HTML COLLECTION</li>"
// document.body.children[1].children[0].style.color = "tomato"
// console.log(document.body.children[1].children)

// //childNodes
// console.log(document.body.childNodes)
// console.log(document.body.childNodes[3]) //ul

// console.log("%c start_2", "color:tomato")
// console.log(liHtmlCollection)
// console.log(liNodeList)
// console.log("%c end_2", "color:tomato")


// // parentNode
// console.log(document.body.childNodes[3]) //ul
// console.log(document.body.childNodes[3].parentNode)  //body


// //firstChild
// console.log(document.body.firstChild);
// console.log(document.querySelector('h1').firstChild)

// //lastChild
// console.log(document.body.lastChild);

// //previousSibling
// //nextSibling
// console.log(document.querySelector('h1').firstChild.nextSibling)
// console.log(document.querySelector('h1').lastChild.previousSibling)


//createElement
let div = document.createElement('div')
div.textContent = "test"

//appendChild

document.body.appendChild(div)

const liHtmlCollection = document.getElementsByTagName('li')
const liNodeList = document.querySelectorAll('li')
console.log("%c start_1", "color:tomato")
console.log(liHtmlCollection)
console.log(liNodeList)
console.log("%c end_1", "color:tomato")
console.log("%c test_before", "color:purple;")

console.log(document.querySelector('ul').childNodes)


let list = document.createElement('li')
let listText = document.createTextNode('test')
list.appendChild(listText)
document.querySelector('ul').appendChild(list)

console.log("%c start_2", "color:tomato")
console.log(liHtmlCollection)
const liNodeList1 = document.querySelectorAll('li')
console.log(liNodeList1)
console.log("%c end_2", "color:tomato")


// test
console.log("%c test_After", "color:purple;")
console.log(document.querySelector('ul').childNodes)

let section = document.createElement('section')
let h1 = document.createElement('h1')
let visit = document.createElement('a')

h1.textContent = "Welcome to the paradise"
visit.href = "http://www.google.com"
visit.textContent = "visit =>"

section.appendChild(h1)
section.appendChild(visit)
document.body.appendChild(section)


let socialMedia = ['fa', 'tw', 'In']

let socialMediaList = document.createElement('ul')

socialMedia.forEach(elt => {
    let li = document.createElement('li')
    li.textContent = elt
    socialMediaList.appendChild(li)
})
let footer = document.createElement('footer')
//before
let h1Before = document.createElement('h1')
h1Before.textContent = 'I am before'
let h1After = document.createElement('h1')
h1After.textContent = 'I am after'

let Behance = document.createElement('li')
Behance.textContent = "Be"

socialMediaList.prepend(Behance)


footer.appendChild(socialMediaList)
socialMediaList.before(h1Before)
socialMediaList.after(h1After)
document.body.appendChild(footer)




//Insertion metohd
// appendChild
//


//attribute
//setAttribute('class','my-class')

let images = document.createElement('img')
images.setAttribute('src', 'https://unsplash.it/300')
images.setAttribute('alt', 'random')
console.log(images.hasAttribute('alt'))
images.removeAttribute('alt')
console.log(images.hasAttribute('alt'))
document.body.appendChild(images)