//Import dos arquivos e funções
var readline = require('readline')
var matematica = require('./Modulo/Tabuada')

var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
})

entradaDados.question('Digite uma tabuada: ', function(numero){
    let tabuada = numero
    matematica.calcularTabuada(tabuada)
})