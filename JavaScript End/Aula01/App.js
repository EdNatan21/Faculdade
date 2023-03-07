//import da Biblioteca de entrada de dados via teclado
var  readline = require('readline');

//Criamos uma interface de comunicação entre o terminal e o node
var entradaDados = readline.createInterface({
    input : process.stdin, 
    output : process.stdout
});

// entradaDados.question('Digite seu nome: \n', function(nome){
//     let nomeUsuário = nome;
//     console.log('O nome do usuário é: ' + nomeUsuário);
// });

/*Tipos de criação de Variáveis
    let - cria uma variável local dentro de um processamento de uma função (escopo local)

    var - cria uma variável global no arquivo (escopo global)

    const - cria um espaço em memória para armazenar um determinado conteúdo que nunca irá mudar (escopo fixo)
    obs: também é utilizado para criar funcões de Call Back
*/

//Entrada de dados referente a Nota1
entradaDados.question('Digite a Nota1: \n', function(Nota1){
    let Valor1 = Nota1;

    //Entrada de dados referente a Nota2
    entradaDados.question('Digite a Nota2 \n', function(Nota2){
        let Valor2 = Nota2;

        //Entrada de dados referente a Nota3
        entradaDados.question('Digite a Nota3 \n', function(Nota3){
            let Valor3 = Nota3;

            //Entrada de dados referente a Nota4
            entradaDados.question('Digite a Nota4 \n', function(Nota4){
                let Valor4 = Nota4;
                let media;

                /*
                    Tipos de dados primitivos (tradicionais)
                     String
                     Number (int e float)
                     Boolean
                     Object (function,array,json)

                     typeof - permite verficar um tipo de dados de um elemento
                     tofixo - Definir casas decimais

                     Conversão de dados de String para Numero
                        parseInt() - converte uma string para inteiro
                        parseFloat() - converte uma string para numero decimal 
                        Number() - converte uma string para numero (independente se será int ou float)
                */
            
            media = Number (Valor1) + Number (Valor2) + Number(Valor3) + Number(Valor4)/4;
            console.log(Number(media.toFixed(1)));

            });
        });
    });
});





