const rad = 0.01745329251
let input = document.querySelector('input')

input.addEventListener('input', () => { 
    let angulo = input.value 
    let ordem = document.querySelector('.ordem')
    let senCosTan = [Math.sin(angulo * rad) , Math.cos(angulo * rad) , Math.tan(angulo * rad)] 

    ordem.innerText = 
    `Sen: ${senCosTan[0]};
    Cos: ${senCosTan[1]}; 
    Tan: ${senCosTan[2]};
    Em ordem crescente: ${senCosTan.sort((a, b) => { 
        return a - b
    })};
    Em ordem decrescente: ${senCosTan.sort((a, b) => { 
        return 'oi', b - a
    })}`
})