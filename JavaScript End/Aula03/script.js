var botaoTabela = document.getElementById('tabela');

const criarElementos =  function(){
    //Recebe o nome digitado dentro da caixa de texto
    let nome = document.getElementById('nome').value;
    //Cria um objeto que recebe todas as caracteristicas da div 
    let div = document.getElementById('listaDeNomes')
    //createElement - Permite criar pelo JS uma tag HTML 
    let tdNomes = document.createElement('td');
    tdNomes.innerText = nome;
    let tdNumero = document.createElement('td');
    tdNumero.innerText = 'none';
    let linhaTabela = document.createElement('tr');

    linhaTabela.appendChild(tdNomes);
    linhaTabela.appendChild(tdNumero);

    let tabela = document.getElementsByTagName('table')[0];

    tabela.appendChild(linhaTabela);

    let nomeItem = document.createTextNode(nome);

    //Associando a ul a div de nomes
    div.appendChild(ulNomes);

    //appndChild - Permite associar um elemento, filho ao elemnto pai 
    ulNomes.appendChild(liNomes);
    liNomes.appendChild(nomeItem);

    //Serve para ajudar a testar o botão(alert('Teste'));
};

//Cria a tabela e sua estrutura de cabeçalho
const criarTabela = function(){

    //Recebe a div para colocar a tabela
    let div = document.getElementsByTagName('listaDeNomes');

    //Cria os elementos table, tr e td para criar a tabela
    let table = document.createElement('table');
    let linhaTipo = document.createElement('tr');
    let colunaNome = document.createElement('td');
    let colunaTelefone = document.createElement('td');
    let tituloNome = document.createTextNode('Nome');
    let tituloTelefone = document.createElement('Telefone');

    div.appendChild(table);
    tabela.appendChild(linhaTipo);
    linhaTipo.appendChild(colunaNome);
    linhaTipo.appendChild(colunaTelefone);

    //Associando os objetos de texto para serem titulos das
    colunaNome.appendChild(tituloNome);
    colunaTelefone.appendChild(tituloTelefone)
};

//Cria um evento de escuta para o botão, utilizando a ação do click
botaoTabela.addEventListener('click', function(){criarElementos();});