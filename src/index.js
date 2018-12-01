import printMe from './print.js'

function component () {
    let element = document.createElement('div'),
        btn = document.createElement('button')

    element.innerHTML = 'Hello webpack 4'
    element.classList.add('text')

    btn.innerHTML = 'click me'
    btn.style.marginLeft = '20px'
    btn.onclick = printMe

    element.appendChild(btn)

    return element;
}

document.body.appendChild(component());