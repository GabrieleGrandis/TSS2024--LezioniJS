//Creare 100 numeri casuali, verificare quali sono minori di 20 e quanti

let numCasuali = [];

//Utilizzo il math.random per generare numeri casuali
//Math. ceil() arrotonda all'intero superiore
//Math.floor() arrotonda all'intero inferiore

console.log(Math.ceil(Math.random() * 100));
let contatoreCasuali = 0;

for(let i = 0; i < 100; i++){
    let numCasuale = Math.ceil(Math.random() * 100)
    if(numCasuali.includes(numCasuale)){
        contatoreCasuali++;
        i--;// mi permette di rifare il giro quando trova un doppione
    }
    numCasuali.push(numCasuale);
}

console.log(numCasuali);

//Stampo i singoli numeri nel div demo
let demo = document.getElementById("demo");

let minori20 = 0;

for(let i = 0; i < numCasuali.length; i++){
    if(numCasuali[i] < 20){
        demo.innerHTML += "<p>" + numCasuali[i] + " - questo è minore di 20" + "</p>";
        minori20++;
    }else {
        demo.innerHTML += "<p>" + numCasuali[i] + "</p>";
    }

}



//voglio sapere quanti ne sono
console.log(minori20);

let display = document.getElementById("display");
display.innerHTML = "I numeri sotto il 20 sono " + minori20;
display.innerHTML += "<br>I numeri doppioni sono " + contatoreCasuali;





