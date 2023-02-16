var resposta = window.confirm('Você tem certeza que deseja entrar no meu site?');

if(resposta){
    var nomeUsuário = window.prompt('Digite seu nome:')
    window.document.getElementById('none').innerText = nomeUsuário;
}
else{
    window.document.getElementById('Corpo').innerText = 'Usuário não identificado';
}
//window.console.log(nomeUsuário);
//window.console.log('Estou testando o console...');