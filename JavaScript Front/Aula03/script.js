/*********************************************************
 * Objetivo: Manipular elementos HTML pelo JavaScript
 * Autor: Marcel
 * Data: 08/03/2023
 * Versão: 1.0
 ************************************************************/

//Criamos um objeto que recebe todas as caracteristicas do botão
var botaoTabela = document.getElementById('tabela');
var div = document.getElementById('listaDeNomes');

//Cria os elementos table, tr e td para criar a tabela
var tabela = document.createElement('table');
var botaoCriar = document.querySelector('input#criar')


// #Teste
// const criarElementos = function (){
//     //Recebe o nome digitado dentro da caixa de texto
//     let nome = document.getElementById('nome').value; 

//     // Cria um objeto que recebe todas as caracteristicas da div
//     let div = document.getElementById('listaDeNomes');

//     //createElement - permite criar pelo JS uma tag HTML
//     let ulNomes = document.createElement('ul');
//     let liNomes = document.createElement('li');
//     let nomeItem = document.createTextNode(nome);

//     //Associando a ul a div de nomes
//     div.appendChild(ulNomes);

//     //appendChild - permite associar um elemento 
//     //filho ao elemento pai
//     ulNomes.appendChild(liNomes);

//     liNomes.appendChild(nomeItem);
// };

//Cria a tabela principal com a linha dos titulos(nome e telefone)
const criarTabela = function (){
    //Recebe a div para colocar a tabela
    let linhaTitulo = document.createElement('tr');
    let colunaNome = document.createElement('td');
    let colunaTelefone = document.createElement('td');

    //Cria dois objetos de texto para serem colocados nas celulas
    let tituloNome = document.createTextNode('Nome');
    let tituloTelefone = document.createTextNode('Telefone');

    //Associando os elementos filhos aos elementos pais
    div.appendChild(tabela);
    tabela.appendChild(linhaTitulo);
    linhaTitulo.appendChild(colunaNome);
    linhaTitulo.appendChild(colunaTelefone);

    //Associandos os objetos de texto para serem titulos das celulas
    colunaNome.appendChild(tituloNome);
    colunaTelefone.appendChild(tituloTelefone);
};

//Cria os itens dentro da tabela principal
const criarItensTabela = function(){
    let entradaNome = document.querySelector('input#nome').value
    let entradaTelefone = document.querySelector('input#telefone').value

    let linhaItem = document.createElement('tr')
    let colunaItemNome = document.createElement('td')
    let colunaItemTelefone = document.createElement('td')

    let textoNome = document.createTextNode(entradaNome)
    let textoTelefone = document.createTextNode(entradaTelefone)

    tabela.appendChild(linhaItem)
    linhaItem.appendChild(colunaItemNome)
    linhaItem.appendChild(colunaItemTelefone)
    colunaItemNome.appendChild(textoNome)
    colunaItemTelefone.appendChild(textoTelefone)
}

//Cria um evento de escuta para o botão utilizando a ação do click
botaoTabela.addEventListener('click', function(){criarTabela();})
botaoCriar.addEventListener('click', function(){criarItensTabela();})