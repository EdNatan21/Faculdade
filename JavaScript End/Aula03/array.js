/*****************************************************
* Objetivo: Manipular Arrays e JSON
* Autor: Edson Natan
* Data: 20/03/2023
* Versão: 1.0
******************************************************/ 

/* 
 [] - Array
 {} - JSON
*/
// console.log(nomes[])
// console.table(nomes)

let nomes = ['edson', 'natan', 'silva']
let cont = 0
nomes.push('nat','gab')
nomes.unshift('iago')

// while (cont < nomes.length) {
// console.log(nomes[cont])
//     cont++
// }

// for (let cont = 0; cont < nomes.length; cont++) {
//     console.log(nomes[cont])
// }

nomes.forEach(item => {
    console.log(`${item}`)
});

nomes.pop()
console.log(`${nomes}`)



