
// window.alert("Hallo Welt");
// window.prompt("Bitte Ihren Namen eingeben");
// window.prompt("Bitte Ihren Namen eingeben", "Cancel");// cancel schreibt in input
// window.confirm("Stimmen Sie meiner Meinung zu?");

// let alter = prompt( "Gib mir bitte dein Alter:" );
// console.log( alter );

// let b = 5;
// let a = b * 5 -3;
// alert(a);

// let mann = "Robert Wadlow ist der größte Mann der Welt : ";
// let grosse = "2,72m";
// alert(mann + grosse);

// alert("Hello\nHow are you?");// \n für nächste line (Zeile)

function myFunction() {
  var person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}
function myFunction1() {
  var txt;
  var r = confirm("Press a button!");
  if (r == true) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo1").innerHTML = txt;
}

// var z = 34
// z = 67
// console.log(z); // 67

// let x = 34
// x = 67
// console.log(x); // 67

// const y = 34
// y = 67
// console.log(y); // error weil const nicht so geändert werden kann.




