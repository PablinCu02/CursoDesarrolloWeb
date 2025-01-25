/*
Programa para adivinar un número
*/

let numeroSecreto = parseInt(Math.random()*10)+1;
let numeroUsuario=0;
let intentos=0; //Llevará el conteo de intentos
let maxintentos=4;



while(numeroUsuario != numeroSecreto){ //Diferente de
    numeroUsuario = prompt("Ingresa un numero entre 1 y 10:");

    if(numeroUsuario == numeroSecreto){
                alert('El numero que ingresaste es igual que el secreto');
                alert(`El numero de intentos que te llevó fue de ${intentos} intentos`)
    }else
        if(numeroUsuario < numeroSecreto)
                alert('El numero que ingresaste es menor que el secreto')
       if(numeroUsuario > numeroSecreto)
                alert('El numero que ingresaste es mayor al secreto');
        intentos++; //El contador de intentos se incrementa en 1

        if(intentos > maxintentos){//Ponemos un limite de intentos
                alert(`Lo siento, has agotado los ${maxintentos} intentos`)
                break;
        }

}



