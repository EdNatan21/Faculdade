/********************************************************************************
 * Objetivo: API para retornar dados de livros
 * Data: 10/04/2023
 * Autor: Marcel
 * Versão: 1.0
 ******************************************************************************/

//Pacotes necessários para criar uma API no node
    //npm install express --save
    //npm install cors --save
    //npm install body-parser --save

//Import das dependencias do projeto

//Dependencia para criar a API
const express = require('express'); 

//Dependencia para criar as permissões de manipulação da API
const cors = require('cors'); 

//Dependencia para receber dados no body da requisição
const bodyParser = require('body-parser');

//Cria o objeto app conforme a classe do express
const app = express();

//Request - receber dados encaminhados para a API
//Response - retornar dados gerados pela API


//Especifica as permissões para a requisição da API
app.use((request, response, next ) => {
    //Atribui no cabeçalho da requisição a permissão de quem poderá 
        //requisitar a API (* siginica que qualque requisição será aceita)
        //Caso seja uma API privada, deverá colocar o IP de quem vai requisitar
    response.header('Access-Control-Allow-Origin', '*');

    //Atribui no cabeçalho da requisição quais metodos serão aceitos na API
       //(GET, POST, PUT, DELETE, OPTIONS)   CRUD (Create, Read, Update e Delete)
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Atribui as permissões ao CORS
    app.use(cors());

    //Próximo, permite continuar a processar as PRÓXIMAS funções 
    next();
});


//ENDPOINT: 
    // GET: Retorna os livros filtrando pelo nome 
app.get('/livros', cors(), async function(request, response){
    //Existem duas formas de receber uma variavel
       //Forma 1: params (recebe por parametro dentro da URL (/))
       //Forma 2: queryString (recebe por variáveis de query (?))

       //Recebe o nome do livro que será pesquisado. Através do params
    //    let nomeDoLivro = request.params.nome;
          let nomeDoLivro = request.query.nome;  
          let livros;
        
       //Import do arquivo de função que pesquisa os livros
       let biblioteca = require('./modulo/livros.js');

       if(nomeDoLivro != '' && nomeDoLivro != undefined){
            //Função que recebe o nome do livro e pesquisa no JSON
           livros = biblioteca.getLivros(nomeDoLivro);
       }else{
             //Função que recebe o nome do livro e pesquisa no JSON
            livros = biblioteca.getAllLivros();
       }
       
       //Validação para identicar se houve retorno de dados
       if(livros){
            response.status(200);
            response.json(livros);
       }else{
            response.status(404);
            response.json();
       } 

});



//livros/isbn/:
app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080.');
});