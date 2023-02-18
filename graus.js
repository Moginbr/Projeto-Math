let inputs = document.querySelector('input')
let grau = document.querySelector('.grau')
let grau2 = document.querySelector('.grau2')
let grau3 = document.querySelector('.grau3')
let grau4 = document.querySelector('.grau4')

    inputs.addEventListener('input', () => {
        if(inputs.value > 0 && inputs.value < 90) {
            grau.innerText = `Grau do primeiro = ${inputs.value}`
            grau2.innerText = `Grau do segundo = ${180 - parseFloat(inputs.value)}`
            grau3.innerText = `Grau do terceiro = ${180 + parseFloat(inputs.value)}`
            grau4.innerText = `Grau do quarto = ${360 - parseFloat(inputs.value)}`
        } else if (inputs.value > 90 && inputs.value < 180){
            grau.innerText = `Grau do primeiro = ${180 - parseFloat(inputs.value)}`
            grau2.innerText = `Grau do segundo = ${inputs.value}`
            grau3.innerText = `Grau do terceiro = ${360 - parseFloat(inputs.value)}`
            grau4.innerText = `Grau do quatro = ${180 + parseFloat(inputs.value)}`
        } else if (inputs.value > 180 && inputs.value < 270){
            grau.innerText = `Grau do primeiro = ${parseFloat(inputs.value) - 180}`
            grau2.innerText = `Grau do segundo = ${360 - parseFloat(inputs.value)}`
            grau3.innerText = `Grau do terceiro = ${inputs.value}`
            grau4.innerText = `Grau do quatro = ${ 360 - (180 - (360 - parseFloat(inputs.value))) }`
        } else if (inputs.value > 270 && inputs.value < 360){
            grau.innerText = `Grau do primeiro = ${360 - inputs.value} `
            grau2.innerText = `Grau do segundo = ${inputs.value - 180}`
            grau3.innerText = `Grau do terceiro = ${180 + (360 - parseFloat(inputs.value))}`
            grau4.innerText = `Grau do Quarto = ${inputs.value}`
        } else {
            grau.innerText = `Grau do primeiro = ${0}`
            grau2.innerText = `Grau do segundo = ${0}`
            grau3.innerText = `Grau do terceiro = ${0}`
            grau4.innerText = `Grau do Quarto = ${0}`
        } 
    })

