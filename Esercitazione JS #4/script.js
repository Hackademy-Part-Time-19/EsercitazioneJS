
let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]

let listaOrdinata = listaProdotti.sort((a,b)=> (a.prezzo - b.prezzo))

listaOrdinata.forEach(prodotto=> {
    console.log(prodotto.prezzo)
} )

//! LocaleCompare fa lo stesso lavoro da a.prezzo - b.prezzo ma con le stringhe. 
listaOrdinata = listaProdotti.sort((a,b)=> a.nome.localeCompare(b.nome))

 listaOrdinata.forEach(nome =>{
    console.log(nome.nome)
})

console.log(listaOrdinata)







/*
listaOrdinata.forEach(funzioneDaEseguire);

function forEachFabiano(lista,funzioneDaEseguire){
    for(let i=0; i<lista.length; i++){
        funzioneDaEseguire(lista[i])
    }
}
forEachFabiano
*/
