
/*
Programa para adivinar un número
*/

let numeroSecreto = 8;
let numeroUsuario=0;
let intentos=0; //Llevará el conteo de intentos


while(numeroUsuario != numeroSecreto){ //Diferente de
    numeroUsuario = prompt("Me indicas un numero por favor:");

    console.log(numeroUsuario);

    if(numeroUsuario == numeroSecreto){
                alert('El numero que ingresaste es igual que el secreto');
                alert(`El numero de intentos que te llevó fue de ${intentos} intentos`)
    }else
        if(numeroUsuario < numeroSecreto)
                alert('El numero que ingresaste es menor que el secreto')
       if(numeroUsuario > numeroSecreto)
                alert('El numero que ingresaste es mayor al secreto');
        intentos++; //El contador de intentos se incrementa en 1

}



