// //global scope
// let hi = "hi"
// var hallo = "hallo"
// const hola = "hola"

// function sayHi() {
//     let newHi = "new hi" //local -- function scope
//     console.log(hi);
// }

// if (true) {
//     var hallo = "new hallo "
//     let newHallo = "new Hallo" // local  -- block scope
//     console.log(newHallo);
// }
// console.log(hallo);

//Arrays: Object
let name1 = "batman"
let name2 = "Superman"
let name3 = "Wonderwomen"

//Array declarations:
//[]

//new Array(...)
let nameList1 = new Array("batman", "Superman", "Wonderwomen")
console.log(nameList1);

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Sean', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'supercode'];


//length
console.log(months)
console.log(months.length)

//accessing Arrays
console.log(months[0]) //Jan
console.log(months[3])// Apr
console.log(months[11])// Dec
//last element of an array
console.log(months[months.length - 1])

let randomArray = [2, "hi", true, function hi() { console.log('say hi') }, { firstName: "batman" }]


let multiDimensionalArray = [[2, 2, 2], [34, 56, 33], [99, 3]]
console.log(multiDimensionalArray[1][2])


let blocks = [
  [1, 1], [1, 51], [1, 101],
  [11, 1], [11, 51], [11, 101],
  [21, 1], [21, 51], [21, 101],
  [31, 1], [31, 51], [31, 101],
]

//function div=> height 8px width 48px
//.style.top=blocks[0][0]
//.style.left=blocks[0][1]


let nameList = ["batman", "Superman", "Wonderwomen"] //length 3
console.log(nameList);
nameList[2] = "iron man"
console.log(nameList);
nameList.pop();
console.log(nameList);

//add element to the end of an array
//not use
nameList[3] = "test"
console.log(nameList);
nameList[33] = "test1"
console.log(nameList);
console.log(nameList[32]) //undefined

//indexOf
console.log(months.indexOf("Sean"))
console.log(months[17])

console.log(months.indexOf("Afrae"))

let country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
console.log(country_list.indexOf("Argentina"))

const myForm = document.getElementById("my-form")
const emailInput = document.getElementById("email-input")
const output = document.getElementById("output")

let whiteList = ["super@super.de", "anass@super.de"]
let check = () => {
  console.log("test")
  console.log(emailInput.value)
  myForm.style.display = "none"
  if (whiteList.indexOf(emailInput.value) >= 0) {
    console.log("it exist")
    output.innerHTML = "Connected"
    output.style.color = "green"

  } else {
    console.log('do not exist')
    output.innerHTML = "Please contact admin"
    output.style.color = "tomato"
  }
}


//slice
//slice(opt:start,opt:end)

let testSlice = [1, 3, 4]
console.log(testSlice);
let testSlice2 = testSlice
console.log(testSlice2);
testSlice.pop()
console.log(testSlice);
console.log("Önder", testSlice2);

let testSlice3 = testSlice.slice()
console.log(testSlice2)

// Syntax
// array.includes(element)
// array.includes(element, start)

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits.includes("Mango");
let b = fruits.includes("Ananas");
let c = fruits.includes("Banana", 3);
let d = fruits.includes("Mango", 1);

console.log(a); // true
console.log(b); // false
console.log(c); // false
console.log(d); // true
