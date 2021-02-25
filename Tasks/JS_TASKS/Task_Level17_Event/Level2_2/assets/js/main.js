let key = document.getElementById('key')
let keyCode = document.getElementById('keyCode')
let code = document.getElementById('code')
let h1 = document.getElementById('zeiger')

document.body.addEventListener('keypress', (e) => {
  key.innerHTML = `${e.key}`
  keyCode.innerHTML = `${e.keyCode}`
  code.innerHTML = `${e.code}`
  zeiger.innerHTML = `${e.keyCode}`
})
