let Sportello;
let Risposta;
let Chiedi;
let Differenza;
let Conto = parseFloat(prompt("Prego, inserisca quanti soldi possiede."));

while(Conto=!0 || Chiedi != "Interrompi"){
if(Conto == 0){
    Risposta = alert("Mi dispiace, ma non può nè prelevare e nè depositare, arrivederci.");
}else{
     Chiedi = parseInt(prompt("Vuoi prelevare o Inviare soldi?"));
}
if(Chiedi==="Prelevare" || Chiedi === "Inviare"){
Sportello= parseFloat(prompt("Perfetto, quindi vuoi " + Chiedi+ ". " + "Inserisca il suo importo:"));
if(Sportello>Conto){
    alert("Il tuo saldo è insufficiente")
    }else{
        Differenza = Conto - Sportello;
        alert("Perfetto, è stato effettuato il " + Chiedi + ". "+ "Il suo saldo rimanente è di: " +Differenza);
    }
}else if (Chiedi === "Interrompi"){
    alert("Va bene, alla prossima!")
}
}
alert("Alla prossima!")

