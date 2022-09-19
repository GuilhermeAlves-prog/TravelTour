const menuIcon = {
  open: 'cardapio.png',
  close: 'close.png'
}
const depoimentstxt = ['" melhor viagem que já fiz na minha vida, recomendo muito!! "',
'" esse é um ótimo serviço podem confiar , foi muito bom a experiencia que tive com eles "',
'" ótimo , tragam sua familia e se divirtam , melhor experiencia que já tive com um serviço de viagem "',]

console.log(depoimentstxt)

const icon = document.getElementById('menu-mobile-img')
const navMobile = document.querySelector('.nav-mobile')
const depoimentText = document.getElementsByClassName('depoiment-text')
console.log(depoimentText)
const depoimentPic = document.getElementsByClassName('depoimentpic')
// let screenWidht = window.innerWidth
let state = 1

function openAndClose() {
  if (state == 1) {
    icon.setAttribute('src', `img/${menuIcon.close}`)
    navMobile.style.display = 'block'
    state = 2
  }else {
    icon.setAttribute('src', `img/${menuIcon.open}`)
    navMobile.style.display = 'none'
    state = 1
  }
}


function showDepoiments() {
  count = 0
  setInterval(() => {
    depoimentText[0].textContent = depoimentstxt[count]
    depoimentText[1].textContent = depoimentstxt[count]
    depoimentPic[0].setAttribute('src', `img/profilepic${count}.png`)
    depoimentPic[1].setAttribute('src', `img/profilepic${count}.png`)

    console.log(count)
    if(count == 2) {
      count = 0
    }else {
      count++
    }
  },10000)
}
showDepoiments()