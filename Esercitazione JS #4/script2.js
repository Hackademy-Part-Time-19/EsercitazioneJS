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
];

/* 
!FILTRAGGIO (PASSAGGIO PER INTERO)

function Prodotti250(lista){
    lista.forEach(element => {
        if(element.prezzo>250){
            console.log(element.prezzo)
        }else{
            
        }
    });
}
Prodotti250(listaProdotti)
*/

/* 
!UTILIZZANDO IL METODO FILTER 
*/
function Prodotti250(lista) {
  lista
    .filter((prodotto) => prodotto.prezzo > 250)
    .forEach((element) => {
      console.log(element.prezzo);
    });
}
Prodotti250(listaProdotti);
