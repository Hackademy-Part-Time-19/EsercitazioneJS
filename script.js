let array = ["franco", "Gennaro", "Valerio", "Giulia", "eugenio"];
let i
let j
let carattereNome
/*STAMPA I NOMI DELL'ARRAY UNO PER UNO*/
for(i=0;array.length>i;i++){
let stampanomi = array[i];
/*STAMPA I CARATTERI DEI NOMI DELL'ARRAY UNO PER UNO*/
for(j=0;array[i].length>j;j++)
{
    console.log(array[i][j]);
}
console.log(stampanomi)
}
