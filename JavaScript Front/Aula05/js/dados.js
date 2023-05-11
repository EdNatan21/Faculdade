let criar = document.getElementById('criar')
let estados = 
    [  'SP', 'AC', 'RJ', 'BA', 'CE', 'MG', 'GO', 'SC', 'SE', 'TO', 'RR',
            'RO', 'RS', 'RN', 'PI', 'PE', 'PR', 'PB', 'PA', 'MT', 'MS', 'MA',
            'ES', 'DF', 'AM', 'AP', 'AL' 
    ]

const getEstados =  function () {
    let sel = document.getElementById('estados')
    estados.forEach(function (item){
        let option = document.createElement('option')
        option.innerHTML= (`${item}`)
        //Permite criar um atributo dentro da tag HTML
        option.setAttribute('value',item)
        sel.appendChild(option)
    });
}

criar.addEventListener('click', function() {getEstados()})
