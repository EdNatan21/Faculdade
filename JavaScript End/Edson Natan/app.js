var readline = require('readline')
var AllEstados = require('./modulo/estados_cidades')

const express = require('express'); 


const cors = require('cors'); 


const bodyParser = require('body-parser');


const app = express();

const todosEstados = function(){
    let status = false;
    let arrayEstados = [];  
    let jsonEstados = {}; 

     AllEstados.estadosCidades.forEach(function(item){

        item.estados.forEach(function(Allestados){

                arrayEstados.push(
                            {
                                "sigla" : estados.sigla,
                                "nome"  : estados.nome,
                                "capital" : estados.capital,
                                "regiao"  : estados.regiao
                            }
                    );

                status = true;
        })
    })
    if(status){
        jsonEstados.quantidade_estados = arrayEstados.length;

        jsonEstados.estadosCidades = arrayEstados;
        return jsonEstados;
    }else
        return false;
}

const siglaEstados = function(todosEstados){
    let sigla = String(todosEstados)
    let status = false
    let arrayEstados = []
    let jsonEstados = {}; 

    AllEstados.estadosCidades.forEach(function(item){

        item.estados.forEach(function(estados){

            if(estados.sigla.includes(sigla)){

                arrayEstados.push(
                                {
                                    "sigla" : estados.sigla,
                                    "nome"  : estados.nome,
                                    "capital" : estados.capital,
                                    "regiao"  : estados.regiao
                                }
                            );

                status = true;
            }
        })
    });

    if (status){
        jsonEstados.Qestados = arrayEstados.length;

        jsonEstados.estados = jsonEstados;
        return jsonEstados;
    }else
        return false;
};

const regiaoEstados = function(todosEstados){
    let regiao = String(todosEstados)
    let status = false
    let arrayEstados = []
    let jsonEstados = {}; 

    AllEstados.estadosCidades.forEach(function(item){

        item.estados.forEach(function(estados){

            if(estados.regiao.includes(regiao)){

                arrayEstados.push(
                                {
                                    "sigla" : estados.sigla,
                                    "nome"  : estados.nome,
                                    "capital" : estados.capital,
                                    "regiao"  : estados.regiao
                                }
                            );

                status = true;
            }
        })
    });

    if (status){
        jsonEstados.Qregiaoestados = arrayEstados.length;

        jsonEstados.estados = jsonEstados;
        return jsonEstados;
    }else
        return false;
};

const cidadeEstados = function(todosEstados){
    let cidade = String(todosEstados)
    let status = false
    let arrayEstados = []
    let jsonEstados = {}; 

    AllEstados.estados.forEach(function(item){

        item.estados.forEach(function(allEstados){

            if(estados.cidade.includes(cidade)){

                arrayEstados.push(
                                {
                                    "sigla" : estados.sigla,
                                    "nome"  : estadoss.nome,
                                    "capital" : estados.capital,
                                    "regiao"  : estados.regiao
                                }
                            );

                status = true;
            }
        })
    });

    if (status){
        jsonEstados.Qregiaoestados = arrayEstados.length;

        jsonEstados.estados = jsonEstados;
        return jsonEstados;
    }else
        return false;
};

app.get('allEstados', cors(), async function(request, response){
    let todosEstados = request.query.estados;  
    let allEstados;
});

app.get('allEstados', cors(), async function(request, response){
    let siglaEstados = request.query.sigla;  
    let sigla;

    if(siglaEstados != '' && siglaEstados != undefined){
        sigla = biblioteca.getsiglaEstados (siglaEstados);
   }else{
        sigla = biblioteca.gettodosEstados();
   }
   
});

app.get('allEstados', cors(), async function(request, response){
    let regiaoEstados = request.query.regiao;  
    let regiao;

    if(regiaoEstados != '' && regiaoEstados != undefined){
        regiao = biblioteca.getregiaoEstados (regiaoEstados);
   }else{
        regiao = biblioteca.gettodosEstados();
   }
   
});

app.get('allEstados', cors(), async function(request, response){
    let cidadeEstados = request.query.cidade;  
    let cidade;

    if(cidadeEstados != '' && cidadeEstados != undefined){
        cidade = biblioteca.getcidadeEstados (cidadeEstados);
   }else{
        cidade = biblioteca.gettodosEstados();
   }
   
});
