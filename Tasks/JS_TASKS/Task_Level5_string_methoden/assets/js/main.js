// LEVEL 1_1

let nachName = "Yilmaz";
let vorName = "Enes";
let name = vorName + " " + nachName;
console.log(nachName.length);
console.log(vorName.length);
console.log(name.length);

// LEVEL 1_2

let txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

// LEVEL 1_3

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log(txt2.search(";"));
console.log(txt2.search("green"));
console.log(txt2.search("blue"));

// LEVEL 1_4

let A = 'Sam is going to coding school';
let var1 = A.slice(0,3)
let var2 = A.slice(4,6)
let var3 = A.slice(1,15) + A.slice(22)
let var4 = A.slice(4,15) + A.slice(22)
let var5 = A.slice(23)
let var6 = A.slice(0,6) + A.slice(22)

document.write("<br>")
document.write("LEVEL 1-4"+ "<br><br>")
document.write(var1+ "<br>")
document.write(var2+ "<br>")
document.write(var3+ "<br>")
document.write(var4+ "<br>")
document.write(var5+ "<br>")
document.write(var6+ "<br>")

// LEVEL 1_5

let text = 'Sam is going to coding school';
let t1 = text.substring(0,3)
let t2 = text.substring(4,6)
let t3 = text.substring(22)
let t4 = text.substring(0,6) + text.substring(22)

document.write("<br>")
document.write("LEVEL 1-5"+ "<br><br>")
document.write(t1+ "<br>")
document.write(t2+ "<br>")
document.write(t3+ "<br>")
document.write(t4+ "<br>")

// LEVEL 1_6

let text1 = "Sam is working at coding school";

let t5 = text1.substr(0,3)
let t6 = text1.substr(4,2)
let t7 = text1.substr(15,2) + text.substr(22,7)
let t8 = text1.substr(0,4) + text1.substr(7,8) + t7

document.write("<br>")
document.write("LEVEL 1-6"+ "<br><br>")
document.write(t5+ "<br>")
document.write(t6+ "<br>")
document.write(t7+ "<br>")
document.write(t8+ "<br>")

// LEVEL 1_7

let text2 = "Sam is good at coding school";

let t9 = text2.replace("coding","")
let t10 = t9.replace("good", "bad")
let t11 = t9.replace("Sam", "Tom")
let t12 = t9.replace("school","tennis")

document.write("<br>")
document.write("LEVEL 1-7"+ "<br><br>")
document.write(t10 + "<br>");
document.write(t11 + "<br>");
document.write(t12 + "<br>");

// LEVEL 1_8

let text3 = "Sam is going to coding school";
let text4 = text3.replace("coding","");

let t13 = text4.toUpperCase();
let t14 = text4.toLowerCase();
let t15 = text4.substr(0,3).toUpperCase() +text4.substr(3,14)+ text4.substr(16).toUpperCase()
let t16 = text4.substr(0,3).toLowerCase() +text4.substr(3,14).toUpperCase()+ text4.substr(16).toLowerCase()
let t17 = text4.replace("is", "Is")
let t18 = t17.replace("going","Going")
let t19 = t18.replace("to", "To")
let t20 = t19.replace("school","School")

document.write("<br>")
document.write("LEVEL 1-8"+ "<br><br>")
document.write(t13 + "<br>")
document.write(t14 + "<br>")
document.write(t15 + "<br>")
document.write(t16 + "<br>")
document.write(t20 + "<br>")

// LEVEL 1_9

let text5 = "Sam is going to coding school";
let text6 = "Tom"
let text7 = "programming bike"
let text8 = " and "
let text9 = "to the movie theater"

let t21 = text5.concat(text8)
let t22 = t21.concat(text9)
let t23 = text5.slice(0,16) + text9.slice(7)
let t24 = text6 + text8 + text5.slice(0,3)+ " are "+ text5.substr(7,9)+ text5.substr(23,6)
let t25 = text6 + text8 + text5.slice(0,3)+ " are "+ text5.substr(7,9)+ "gym"+ text8.concat(text9)

let t26 = text6+ text5.slice(3,16)+ text5.slice(23)+text8.concat(text9)


document.write("<br>")
document.write("LEVEL 1-9"+ "<br><br>")
document.write(t22 + "<br>")
document.write(t23 + "<br>")
document.write(t24 + "<br>")
document.write(t25 + "<br>")
document.write(t26 + "<br>")













