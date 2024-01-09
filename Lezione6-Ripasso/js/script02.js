//ARRAY: strutture 0 based 
let studenti =[
    "Mario",
    "Eliana",
    "Francesca",
    "Gabriele",
    "Alessio"
];
// console.log(studenti[0]);
// console.log(studenti[1]);
// console.log(studenti[2]);
// console.log(studenti[3]);
// console.log(studenti[4]);

studenti.reverse();
studenti.sort();



//CicloFor per poter leggere l'array
//let i = 0 (dico di partire da zero a contare l'array) 
//i < studenti.length(dico quando fermarsi, in questo caso .length = quando finiscono gli elementi nel array)
//i++ (aggiorna la variabile, aggiunge sempre 1 elemento(++))
for(let i = 0; i < studenti.length; i++){
    console.log(studenti[i]);
}
for (let i = studenti.length; i >= 0; i--) {
    console.log(studenti[i]);
    
}

//FOREACH = cicla su elementi di cui noi stabiliamo il nome x array
//per ogni studente presente nell'array degli studenti = fai qualcosa
console.log("Uso il foreach");
studenti.forEach(studente =>{
    console.log(studente);
});

///for
for (let i = 0; i < 10; i++) {
    for (let j = 0; j <= i; j++){
        console.log(i + "*");
    }
    
}


//For con if innsetato
let numeri = [10,20,1,14,9,55,16,32,21];

//voglio capire quanti e quali numeri sono sopra il 20 
for(let i = 0; i < numeri.length; i++){
    if(numeri[i] >= 20){
        console.log(numeri[i] + " Questo è più grande!");
    }else if (numeri[i] == 20){
        console.log(numeri[i] + " Questo è proprio 20");
    }else if (numeri[i] < 15){
        console.log(numeri[i] + " Questo è sotto il 15");
    }else{
        console.log(numeri[i]);
    }
}


//stessa cosa con le parole
let parole = ["Ciao", "Come stai", "Tutto", "Bene", "Arrivederci"]

for(let i = 0; i < parole.length; i++){
    if(parole[i].length < 7){
        console.log(parole[i] + " Ha meno di 7 caratteri");
    }else{
        console.log(parole[i]);
    }
}






