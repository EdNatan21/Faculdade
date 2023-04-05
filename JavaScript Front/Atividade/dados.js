let criar = document.getElementById('criar')
let estados = 
    [  'SP', 'AC', 'RJ', 'BA', 'CE', 'MG', 'GO', 'SC', 'SE', 'TO', 'RR',
            'RO', 'RS', 'RN', 'PI', 'PE', 'PR', 'PB', 'PA', 'MT', 'MS', 'MA',
            'ES', 'DF', 'AM', 'AP', 'AL' 
    ]

function criarEstados() {
    let sel = document.getElementById('estados')
    estados.forEach(function (item){
        let option = document.createElement('option')
        option.innerHTML= (`${item}`)
        sel.appendChild(option)
    });
}

criar.addEventListener('click', function() {criarEstados()})
