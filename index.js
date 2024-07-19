let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item')
let indicadores = document.querySelector('.indicadores');
let pontos = indicadores.querySelectorAll('ul li');
let list = container.querySelector('.list')

let active = 0
let fisrtPosition = 0
let lastPosition = items.length - 1

function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

 let pontosOld = indicadores.querySelector('ul li.ativo')
    pontosOld.classList.remove('ativo')
    pontos[active].classList.add('ativo')

    indicadores.querySelector('.numero').innerHTML = '0' + (active + 1)

}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0: active + 1
 setSlider()
    items[active].classList.add('active')

}

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < fisrtPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')

}


