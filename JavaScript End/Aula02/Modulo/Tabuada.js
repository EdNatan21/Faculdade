/*----------------------------------------------------------
° Objetivo: Realizar o calculo de uma tabuada
° Autor: Natan
° Data: 07/02/2023
° Versão: 1.0
----------------------------------------------------------*/

//Gerar a tabuada de um número (function Call Back)
const calcularTabuada = function(numeroTabuada){
    //Entradas
    let tabuada = numeroTabuada
    let status
    let cont = 0
    let resultado

    //Processamentos
    if(tabuada == null)
        status = false

    else if(isNaN(tabuada))
        status = false
    
    else if(tabuada == 0)
        status = false

    else{
        //while
        while (cont <= 10){
            resultado = tabuada * cont
            console.log(`${tabuada} x ${cont} = ${resultado}`)
            cont = cont + 1
        }
        status = true
    }
    //Saída
    return status;
}

//Para Acessar uma função em outro arquivo, é nescessário fazer o exports da função.
module.exports = {
    calcularTabuada
}