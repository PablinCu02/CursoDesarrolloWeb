// Comentario 
/*6
DGFGDDFG
como estas
*/

let numeroSecreto = 8;
let numeroUsuario=0;
let intentos=0;


while(numeroUsuario != numeroSecreto){
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
        intentos++;  

}



