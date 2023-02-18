const rad = 0.01745329251
let angulo = document.querySelector('#angulo')

angulo.addEventListener('input', () => {

    let expressao = document.querySelector('.expressao')
    let resultado = document.querySelector('.resultado')
    let seno = document.querySelector('.seno')
    let cosseno = document.querySelector('.cosseno')
    let sen = Math.sin(angulo.value * rad)**2 
    let cos = Math.cos(angulo.value * rad)**2

    seno.innerText = `Seno do ângulo: ${Math.sin(angulo.value * rad)}` 
    cosseno.innerText = `Cosseno do ângulo: ${Math.cos(angulo.value * rad)}`

    expressao.innerText = `sen²(${angulo.value}) + cos²(${angulo.value}) = 1`
    resultado.innerText = ` ${sen} +  ${cos} 
                            Total: ${(sen + cos)}`
})
