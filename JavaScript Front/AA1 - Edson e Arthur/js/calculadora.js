let input = document.getElementById('valor')
let divRes = document.getElementById('resultado')


let numero1 = 0
let numero2 = 0
let temporaria = 0
let temporaria2 = 0
let resultado = 0
let operacaoSimbolo = ``
let contador = 0


const calcular = () => {
    numero2 = parseFloat(input.value)
    if(isNaN(numero2)){
        alert('Valor invalido, digite um número!')
    }
    resultado = eval(`${numero1} ${operacaoSimbolo} ${numero2}`)
    divRes.innerText = resultado
}

const operacao = (simbolo) => {
    contador++
    if(contador >= 2){
        if(isNaN(numero1)){
            alert('Valor invalido, digite um número!')
        }
        temporaria = parseFloat(input.value) //2
        numero1 = temporaria + numero1
        divRes.innerText = numero1
        valor.value = ''

    } else {
        numero1 = parseFloat(input.value)//3
        valor.value = ''
        if(isNaN(numero1)){
            alert('Valor invalido, digite um número!')
        }
    }
    operacaoSimbolo = simbolo
    
}

const limpar = () => {
    input.value = ''
    divRes.innerText = ''
}


const btnsomar = document.getElementById('somar')
btnsomar.addEventListener('click', () => {
    operacao('+')
})

const btndividir = document.getElementById('dividir')
btndividir.addEventListener('click', () => {
    operacao('/')
})

const btnsubtrair = document.getElementById('subtrair')
btnsubtrair.addEventListener('click', () => {
    operacao('-')   
})


const btnMutiplicar = document.getElementById('multiplicar')
btnMutiplicar.addEventListener('click', () => {
    operacao('*')    
})


const btnlimpar = document.getElementById('limpar')
btnlimpar.addEventListener('click', () => {
    limpar()
})

const btncalcular = document.getElementById('calcular')
btncalcular.addEventListener('click', () => {
    calcular()
})





