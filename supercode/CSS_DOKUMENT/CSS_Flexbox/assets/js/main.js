const gallery = document.getElementById("gallery")
const cirleDark = document.getElementById("circle-dark")
const cirleLight = document.getElementById("circle-light")
/* Another Way */
const illustration4 = document.getElementById("illustration4")
const illustration5 = document.getElementById("illustration5")
const illustration6 = document.getElementById("illustration6")

function changeModeDark() {
    console.log("it works")
    document.body.style.background = "#000"
    cirleDark.style.display = "none"
    cirleLight.style.display = "block"
    // gallery.innerHTML = '<img src="assets/img/illustration4_dark.png" alt="illustration4"><img src="assets/img/illustration5_dark.png" alt="illustration5"><img src="assets/img/illustration6_dark.png" alt="illustration6">'
    /* Another Way */
    console.log(illustration4.id)
    console.log(illustration4.src)
    console.log(illustration4.alt)
    //console.log(illustration4.classList)
    illustration4.src = "assets/img/illustration4_dark.png"
    illustration5.src = "assets/img/illustration5_dark.png"
    illustration6.src = "assets/img/illustration6_dark.png"
}
function changeModeLight() {
    console.log("it works")
    document.body.style.background = "#fff"
    cirleDark.style.display = "block"
    cirleLight.style.display = "none"
    // gallery.innerHTML = '<img src="assets/img/illustration4.png" alt="illustration4"><img src="assets/img/illustration5.png" alt="illustration5"><img src="assets/img/illustration6.png" alt="illustration6">'
    illustration4.src = "assets/img/illustration4.png"
    illustration5.src = "assets/img/illustration5.png"
    illustration6.src = "assets/img/illustration6.png"
}
