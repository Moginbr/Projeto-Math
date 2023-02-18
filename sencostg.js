const rad = 0.01745329251

var angulo = document.querySelector('input')
var cos = document.querySelector('.cosseno')
var sen = document.querySelector('.seno')
var tan = document.querySelector('.Tangente')

angulo.addEventListener('input', () => {
    cos.innerText = `O Cosseno é: ${Math.cos(angulo.value*rad)}`
    sen.innerText = `O Seno é: ${Math.sin(angulo.value*rad)}`
    tan.innerText = `A Tangente é: ${Math.tan(angulo.value*rad)}`
})