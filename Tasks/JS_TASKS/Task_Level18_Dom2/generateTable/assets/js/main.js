let zeile = document.getElementById('zeilenFeld')
let spalte = document.getElementById('spaltenFeld')
let table = document.createElement('table')


let generateTable = () => {
  for (let i = 1; i <= zeile.value; i++) {
    let tr = document.createElement('tr')
    table.appendChild(tr);
    for (let j = 1; j <= spalte.value; j++) {
      let td = document.createElement('td')
      td.appendChild(document.createTextNode(`${i}.${j}`))
      tr.appendChild(td)
    }
  }
  result.appendChild(table)
}
