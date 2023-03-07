/*
 °Objetivo: Criar Funções para realizar calculos matemáticos
 °Dia: 15/02/23
 °Autor: Edson Natan
 °Versão: 1.0
*/

//Modelo 1 de criação de função 
function calcular(tipoCalculo){
    //Recebe o argumento e converte para MAIUSCULO (toUpperCase)
    let operacao = tipoCalculo.toUpperCase();
    let numero1 = document.getElementById('valor1').value;
    //Recebe os valores digitados nas caixas de texto no html
    // getElementById = pega o elemento pelo id atribuido
    let numero2 = document.getElementById('valor2').value;
    let divResultado = document.getElementById('resultado');
    let resultado;
    let status = true;
    let msgErro;
    /*
    Exemplo utilizando IF

    if(operacao =="SOMAR")
        resultado = Number(numero1) + Number(numero2);

    else if(operacao =="SUBTRAIR")
        resultado = Number(numero1) - Number(numero2);

    else if(operacao =="DIVIDIR")
        resultado = Number(numero1) / Number(numero2);

    else if(operacao =="MULTIPLICAR")
        resultado = Number(numero1) * Number(numero2);

    */

    //Validação para tratar a entrada de caracteres inválido
    //isNaN() - é uma função que valida se a variavel tem valor numerico ou não
    if(isNaN(numero1) || isNaN(numero2))
    {
        status = false;
        msgErro = "Erro: Entrada Inválida, não é possível letras."
    }else{
    //Exemplo utilizando o Switch
        switch (operacao) {
            case "SOMAR":
                resultado = SOMAR(numero1,numero2)
                break;

            case "SUBTRAIR":
                resultado = SUBTRAIR(numero1,numero2)
                break;

            case "DIVIDIR":
                //Tratamento de erro para a divisão por 0
                if(numero2 == 0)
                {
                    status = false;
                    msgErro = 'Erro, Não é possível realizar está operação.';
                }
                else
                resultado = DIVIDIR(numero1,numero2)
                break;

            case "MULTIPLICAR":
                resultado = MULTIPLICAR(numero1,numero2)
                break;

            default:
                break;
        }
    }
    if (status)
        divResultado.innerText = resultado.toFixed(2);

    else
        divResultado.innerHTML = msgErro;
        divResultado.style
}

function zerar(TipoZerar){
    if('valor1'){

    }
    document.getElementById('valor1').value = "";
    document.getElementById('valor2').value = "";
    document.getElementById('resultado').innerText = "";
}

//Modelo 2 de criação de função (Arrow Function)
const SOMAR = (valor1, valor2) => Number(valor1) + Number(valor2);

const SUBTRAIR = (valor1, valor2) => Number(valor1) - Number(valor2);

const DIVIDIR = (valor1, valor2) => Number(valor1) / Number(valor2);

const MULTIPLICAR = (valor1, valor2) => Number(valor1) * Number(valor2);