let select = document.querySelector('select')

select.addEventListener('input', () => {
    if(select.value === 'relacaoFundamental'){
        window.location.href = 'relacaoFundamental.html'
    } else if (select.value === 'grau'){
        window.location.href = 'graus.html'
    } else if(select.value === 'crescente'){
        window.location.href = 'crescente.html'
    }
})