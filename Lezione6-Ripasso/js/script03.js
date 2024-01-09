function estrai(){
let numEstrazione = [];

console.log(Math.ceil(Math.random() * 6));

for (let i = 0; i < 6; i++) {
    let numeriCasuali = Math.ceil(Math.random() * 90);

    if(numEstrazione.includes(numeriCasuali)){
        i--;
    }else{
        numEstrazione.push(numeriCasuali);
    }
}
}


// for(let i = 0; i < numEstrazione; i++){
//     if (numEstrazione[i] < 6)
//     console.log(numEstrazione[i]);
// }

