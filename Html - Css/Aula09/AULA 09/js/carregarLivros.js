/***********************************************************
 * Objetivo: Arquivo responsável por carregar os dados dos 
 *    livros, fazendo a integração entre o Front e Back
 * Data: 02/05/2023
 * Autor: Marcel
 * Versão: 1.0
 **********************************************************/

var botaoPesquisar = document.getElementById('pesquisar')

//Retorna todos os livros
const getLivros = function(){
    let url = 'http://localhost:8080/livros';

    fetch (url)

    .then (function(response){
        return response.json();
    })
    .then (function(dadosLivros){
        createCard(dadosLivros);
    })
};

//Retorna os livros filtrando pelo nome
const getLivrosByName = function(nomeLivro){
    let url = `http://localhost:8080/livros?nome=${nomeLivro}`;

    fetch (url)

    .then (function(response){
        return response.json();
    })
    .then (function(dadosLivros){
        createCard(dadosLivros);
    })
}

//Cria todos os cards no HTML
const createCard = function(dados){

    //Recebe o elemento da DIV principal do HTML
    let conteudo = document.getElementById('conteudoLivros');

    conteudo.innerText = ''

    //Entra no atributo livros do JSON e percorre o array de todos os livros
    dados.livros.forEach(function(item){

    //############### CRIA OS ELEMENTOS HTML ######################
    
    //Cria a div para receber os cards
        let card = document.createElement('div');
        //Atribui a propriedade class e coloca o valor card
                //(Exatamente igual criamos no HTML)
        card.setAttribute('class', 'card');
    
    //Cria o elemento figure
        let figure = document.createElement('figure');

    //Cria o elemento img
        let img = document.createElement('img');
        img.setAttribute('src', item.capa);
    
    //Cria o elemento h2
        let h2 = document.createElement('h2');
    
    //Cria o elemento span para o isbn
        let span_isbn = document.createElement('span');
        span_isbn.setAttribute('class', 'isbn');

    //Cria o elemento span para o valor
        let span_valor = document.createElement('span');
        span_valor.setAttribute('class', 'valor');

    //Cria o elemento div para o botão comprar
        let div_botao_comprar = document.createElement('div');
        div_botao_comprar.setAttribute('class', 'comprar');

    //Cria o texto do titulo (h2)
        let titulo = document.createTextNode(item.livro);
    
    //Cria o texto do isbn e valor (span)
        let texto_isbn = document.createTextNode('ISBN: ' + item.isbn);
        let texto_valor = document.createTextNode(item.valor);

    //Cria o texto do botao comprar
        let texto_botao_comprar = document.createTextNode('Comprar');


    //############# ASSOCIAR OS ELEMENTOS CONFORME O HTML #####
    conteudo.appendChild(card);
    card.appendChild(figure);
    figure.appendChild(img);
    card.appendChild(h2);
    card.appendChild(span_isbn);
    card.appendChild(span_valor);
    card.appendChild(div_botao_comprar);

    // ########## ASSOCIANDO OS TEXTOS NOS ELEMENTOS #############
    h2.appendChild(titulo);
    span_isbn.appendChild(texto_isbn);
    span_valor.appendChild(texto_valor);
    div_botao_comprar.appendChild(texto_botao_comprar);

  })

}

window.addEventListener('load', function(){getLivros();})
botaoPesquisar.addEventListener('click', function(){
    let nome = document.getElementById('nomeLivro').value
    if (nome == '')
        getLivros()
    else 
        getLivrosByName(nome)
})