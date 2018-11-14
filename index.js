import color from "color";

let body = document.querySelector('body')
let color1 = document.querySelector('#color1')
let color2 = document.querySelector('#color2')
let css = document.querySelector('h3')
let randomButton = document.querySelector('button')

function updateH3() {
    css.textContent = body.style.background
}

window.addEventListener('DOMContentLoaded', () => {
    updateBackground()
    updateH3()
})

function updateBackground() {
    body.style.background =
        `linear-gradient(to right, ${color1.value}, ${color2.value})`
}

function generateRandomRGB() {
    function randomHue() {
        return Math.floor(Math.random() * 255)
    }

    let rgb = ['r', 'g', 'b'].map(color => randomHue())
    let string = `rgb(${rgb.join(', ')})`

    return color(string, 'rgb').hex()
}

generateRandomRGB()

function generateRandomGradient() {

    let newColor1 = generateRandomRGB()
    let newColor2 = generateRandomRGB()

    color1.value = newColor1
    color2.value = newColor2

    body.style.background = `linear-gradient(to right, ${newColor1}, ${newColor2})`

    onChangeColor()
}

function onChangeColor() {
    updateH3()
    updateBackground()
}

// color1.addEventListener('input', onChangeColor)
// color2.addEventListener('input', onChangeColor)
randomButton.addEventListener('click', generateRandomGradient)