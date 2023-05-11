/*
* Objetivo: Criar uma API para manipular o Banco de Dados
* Data: 08/05/2023
* Autor: Marcel
* Versão: 1.0
*/

// Para criar a API devemos instalar os seguintes pacotes
    // npm install express --save
    // npm install cors --save
    // npm install body-parse --save

// Para criar a conexão com o Banco de Dados devemos iniciar os seguintes pacotes
    // npm install prisma --save
    // npx prisma (verificar se foi instalado)
    // npx prisma init (inicializa o prisma na API, ele cria uma pasta chamada prisma, um arquivo chamado env, um arquivo chamado gitignore)
    // npm instal @prisma/client --save (instala o cliente para manipular os scirptsSQL)

//Import das depedências do projeto
const express = require('express') // Dependência para criar a API
const cors = require('cors') // Dependência para criar as permissões de manipulação da API
const bodyParser = require('body-parse') // Dependência para receber dados no body da requisição

// Cria o objeto app conforme a classe do express
const app = express()

app.use((requet, response, next ) =>{
    //Atribui no cabeçalho da requisição a permissão de quem poderá 
    //requisitar a API (* Siginifica que qualquer requisição seja aceita)
    //Caso seja uma API privada, devera colocar o IP de quem vai requisitar
    response.header('Acess-Control-Allow-Origin', '*')

    //Atribui no cabeçalho da requisição quais metodos serão aceitos na API
    // (GET, POST, DELETE, PUT, OPTIONS) croud(Create, Head, Uptade, Delete)
    response.header('Acess-Control-Allow-Method', 'GET, POST, PUT, DELETE, OPTIONS')

    //Atribui as permissões ao CORS
    app.use(cors())

    //Próximo, permite continuar o processar as PROXIMAS funções
    next()
})

// POST (Novo item)
app.post('/v1/unifecaf/aluno', cors(), async function(request, response){
    
})

// PUT (Atualizar)
app.put('/v1/unifecaf/aluno/:id', cors(), async function(request, response){
    
})

// DELETE (Apagar)
app.delete('/v1/unifecaf/aluno/:id', cors(), async function(request, response){
    
})

// GET (Listar todos os itens)
app.get('/v1/unifecaf/aluno', cors(), async function(request, response){
    
})

// GET (Buscar itens pelo id)
app.get('/v1/unifecaf/aluno/:id', cors(), async function(request, response){
    
})

app.listen(8080, function(){
    console.log('servidor aguardando requisições na porta 8080')
})