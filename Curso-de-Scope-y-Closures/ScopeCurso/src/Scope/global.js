//Var
var a; //Aqui estamos declarando / here we're declaring
var b = 'b'; // Aqui estamos declarando y asignando / here we're declaring and assiggning
b = 'bb'; //Reasignando // Reassigning
var a ='aa'; //Redeclarando //Redeclaring
//Global Scope
var fruit = 'Apple'; //Global

function bestFruit(){
    console.log(fruit);
}

bestFruit()

//Cuidado con declarar de forma global
function countries(){
    //Tener cuidado por que aqui estamos asignamos y esto lo toma como var global o scope global
    country = 'Mexico';
    console.log(country);
}

countries();
console.log(country);