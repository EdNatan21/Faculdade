let cidade = document.querySelector('#cid')
let estados = 
    [  'São Paulo', 'Acre', 'Rio de Janeiro', 'Bahia', 'Ceara', 'Minas Gerais', 'Goias', 'Santa Catarina', 'Sergipe', 'Tocantis', 'Roraima',
            'Rondônia', 'Rio Grade do Sul', 'Rio Grande do Norte', 'Piaui', 'Pernambuco', 'Paraná', 'Paraiba', 'Pará', 'Mato Grosso', 'Mato Grosso do Sul', 'Maranhão',
            'Espirito Santo', 'Distrito Federal', 'Amazonas', 'Amapá', 'Alagoas' 
    ]
estados.forEach( item => {
    let op = document.createElement('option')
    op.innerHTML = (item)
    cidade.appendChild(op)
});