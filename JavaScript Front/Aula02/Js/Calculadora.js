/*
 °Objetivo: Criar Funções para realizar calculos matemáticos
 °Dia: 15/02/23
 °Autor: Edson Natan
 °Versão: 1.0
*/
function calcular(tipoCalculo){
    //Recebe o argumento e converte para MAIUSCULO (toUpperCase)
    let operacao = tipoCalculo.toUpperCase();
    let numero1 = document.getElementById('valor1').value;
    //Recebe os valores digitados nas caixas de texto no html
    // getElementById = pega o elemento pelo id atribuido
    let numero2 = document.getElementById('valor2').value;
    let divResultado = document.getElementById('resultado');
    let resultado;
    if(operacao =="SOMAR")
        resultado = Number(numero1) + Number(numero2);

    if(operacao =="SUBTRAIR")
        resultado = Number(numero1) - Number(numero2);

    if(operacao =="DIVIDIR")
        resultado = Number(numero1) / Number(numero2);

    if(operacao =="MULTIPLICAR")
        resultado = Number(numero1) * Number(numero2);

        divResultado.innerText = resultado;
}

function zerar(TipoZerar){
    if('valor1'){

    }
    document.getElementById('valor1').value = "";
    document.getElementById('valor2').value = "";
    document.getElementById('resultado').innerText = "";
}