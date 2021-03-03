// Window Object

// console.log(window);
// console.log(window.alert("hello"));
// console.log(window.prompt("say hello"));

// **************

// Window Size

// console.log(window.innerHeight);
// console.log(window.innerWidth);

// For IE
// document.documentElement.clientWidth
// document.body.clientWidth

//********************* */

//Window Screen

// console.log(window.screen.height);
// console.log(window.screen.width);

// console.log(window.screen.availHeight);
// console.log(window.screen.availWidth);

//*********************

// window.open(URL, name, specs, replace) window.close()

// let myWindow;

// function openWin() {
//   myWindow = window.open("https://www.google.de");
//   //   myWindow = window.open("https://www.google.de", "_self");
// }

// function closeWin() {
//   myWindow.close();
// }

//*********************
//onload

// function myLoad() {
//   console.log("is loaded");
//   alert("Welcome to my Page - today'S special offer 10% off!");
// }

// window.onload = myLoad();

//************************** */

//scrollTo(xpos,ypos)

// document.querySelector("#scrollTo").addEventListener("click", () => {
//   window.scrollTo(0, 1000);
// });

//*********************** */

//Window Location
// console.log(window.location);
// console.log(window.location.reload());

//window.location.replace(newUrl)
// console.log(window.location.replace("https://www.google.de"));

//change location.pathname
// console.log(window.location.pathname);
// location.pathname = "../html/about.html";

//************************** */

//Window History
// console.log(window.history);

// function goBack() {}

// window.history.back();

//*********** */

//Window Navigator

// console.log(window.navigator);
