let card = document.getElementById('card')
let datas = document.querySelectorAll('input')
class Rapper {
  constructor(firstName, lastName, stageName, album, hits, net, age, img, quote) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.stageName = stageName;
    this.album = album;
    this.hits = hits;
    this.net = net;
    this.age = age;
    this.img = img;
    this.quote = quote;
  }
  showCard() {
    card.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${this.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${this.firstName} ${this.lastName}</h5>
      <p class="card-text">${this.quote}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Age : ${this.age}</li>
      <li class="list-group-item">Album : ${this.album}</li>
      <li class="list-group-item">Singles : ${this.hits}</li>
      <li class="list-group-item">Worth : ${this.net}</li>
      <li class="list-group-item">Singles : ${this.hits}</li>
    </ul>
    </div>`
  }
  getDataJSON() {
    let array = [this.firstName, this.lastName, this.stageName, this.album, this.hits, this.net, this.age, this.img, this.quote]
    let arrayJson = JSON.stringify(array)
    console.log(arrayJson);
  }
}

let button = document.getElementById('button')
button.addEventListener('click', () => {
  let rapper1 = new Rapper(datas[0].value, datas[1].value, datas[2].value, datas[3].value, datas[4].value, datas[5].value, datas[6].value, datas[7].value, datas[8].value);
  rapper1.showCard()
  rapper1.getDataJSON()
})

