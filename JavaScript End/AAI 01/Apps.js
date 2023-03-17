//Calcular area de um Circulo
function getCalculoCirculo(valorR){
    let pi = 3.14
    let raio = valorR
    let area = Number(pi) * Number(raio ** 2)

    if(area == null)
        area = false
    
    else if(isNaN(area))
        area = false
    
    else if(area == 0)
        area = false
    
    else{
       
    }
    return area
}
console.log(`valor circulo: ${getCalculoCirculo(10)}`)

//----------------------------------------------------------\\

//Calcular area de um quadrado
function getCalculoQuadrado(valorL){
    let lado = valorL
    let area = (lado * 4)

    if(area == null)
        area = false
    
    else if(isNaN(area))
        area = false
    
    else if(area == 0)
        area = false
    
    else{
       
    }
    return area
}
console.log(`valor quadrado: ${getCalculoQuadrado(10)}`)



