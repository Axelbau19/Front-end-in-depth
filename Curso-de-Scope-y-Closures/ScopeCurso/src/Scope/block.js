function fruits(){
     if(true){
     var fruit = 'Apple'; //function scope
     let fruit1= 'Kiwi';//Block scope
     const fruit2 = 'Banana';//Block scope
}
     //Solamente va mostrar apple  por que var lo hace function, mientras que la otras constantes y variables se queda en el bloque , esto es el block scope
     console.log(fruit);
     console.log(fruit1);
     console.log(fruit2);
}
    