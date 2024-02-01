//con if
 
    let numEstrazione = [];
    let giri= 0;

    for (let i = 0; i < 6; i++) {

        let max = 60;
        let min = 25;

        let numeriCasuali = Math.ceil(Math.random() * (max - min)) + min;
    
        if(numEstrazione.includes(numeriCasuali)){
            i--;
        }else{
            numEstrazione.push(numeriCasuali);
        }
    }
    console.log(numEstrazione);


//con while

    let sequenzaNum = [];

    while (sequenzaNum.length < 6) {
    
        let numEstratto = Math.ceil(Math.random() * 90);

        if(sequenzaNum.includes(numEstratto)){
            sequenzaNum.push(numEstratto);
        }
}

//senza if

let setPerEstrazione = [];

for(let i = 0; i < 90; i++){
    setPerEstrazione.push(i+1);
}

console.log(setPerEstrazione);

let numeriEstratti = [];

for (let i = 0; i < 6; i++) {
    let numeroCasuale = Math.floor(Math.random()* setPerEstrazione.length);
    numeriEstratti.push(setPerEstrazione[numeroCasuale]);
    setPerEstrazione.splice(numeroCasuale, 1);
}
console.log(numeriEstratti);
console.log(setPerEstrazione);



    
