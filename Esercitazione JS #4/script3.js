let url = "https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999"

let urlSplitted = url.split("?");
console.log(urlSplitted)

let Valori = urlSplitted[1].split("&")
console.log(Valori)

Valori.forEach(function(valore){
    let valoriSplittati = valore.split("=")
    console.log(valoriSplittati[1]) //! CON INDICE UNO SI INTENDE IL SECONDO VALORE, POICHE' IL PRIMO è L'URL IN Sè. Siccome c'è un foreach, per ogni valore splittato, 
                                     //! si intende il valore [1] (un po' come un ciclo for)
})



function wordSplit(word){
    word = word.toLowerCase().replace(/\W/g, "");
    //! Converto la mia parola come se  fosse un Array, 
    let contrario = word.split("").reverse().join("");
    if(word === contrario){
        console.log("è una Parola Palindroma");
    }else{
        console.log("Non è una parola palindroma");
    }
}
wordSplit("anna");
wordSplit("i topi non avevano nipoti");
wordSplit("Fabiano");

