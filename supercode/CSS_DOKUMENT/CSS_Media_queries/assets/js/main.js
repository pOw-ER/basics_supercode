function subscribeConfirmation() {
    console.log("it works")
    console.log(document.getElementById("emailHTML").value)
    document.getElementById("pop-up").innerHTML = document.getElementById("emailHTML").value
    document.getElementById("pop-up").style.display = "block"
    document.getElementById("signForm").style.display = "none"
}