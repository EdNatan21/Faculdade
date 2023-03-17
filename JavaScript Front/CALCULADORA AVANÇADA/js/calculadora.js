function calcular (tipoCalculo){
    var divRes = document.querySelector('div#resultado')
    let operacao = tipoCalculo.toUpperCase();
    let valor = document.getElementById('valor').value
    var valor1 = Number(valor)

        if(operacao == 'SOMAR'){
            limpar()
            valor = document.getElementById('valor').value
            var valor2 = Number(valor)
            res = valor1 + valor2 
        } else if (operacao == 'SUBTRAIR') {
            res = valor1 - valor2
        } else if (operacao == 'MULTIPLICAR') {
            res = valor1 + valor2
        } else if (operacao == 'DIVIDIR') {
            res = valor1 + valor2
        } else if (operacao == 'LIMPAR') {
            limpar()
        } 
        
        if (operacao == 'IGUAL'){
            divRes.innerHTML = `${res}`
        }
}

function limpar(){
    valor.value= ''
    document.getElementById('resultado').innerText = ''
}