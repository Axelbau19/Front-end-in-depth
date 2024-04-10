var firstName;  // Valor declarado Undefined
firstName = 'Axel';//Asignando
console.log(firstName);

var lastName = 'Bau'; //Declarando y asignando
lastName = 'Rosa';//Reasignando
console.log(lastName);

var secondName = 'David'; //Declarando y asignando
var secondName = 'Axel'; // reasignando
console.log(secondName);

// Let
let fruit = 'Apple'; //Declarar y asignar
fruit = 'Kiwi'; //Reasignar
//si se puede reasignar

///No puedo redeclarar una variable
let fruit = 'Banana';

// const
const animal = 'Dog'; //Declara y asigna
animal = 'cat'; //Reasignando
///Pero no se podra ejecutar
//
const animal = 'Snake'; //Tampoco se puede redeclarar y asignar
//Si es un arreglo
const vehiculo = [];
vehiculo.push("Bici");
//Si puede meter elementos por que hace referencia mientra los otros no
//Al igual eliminarla
console.log(vehiculo);
//Mostrara Bici
vehiculo.pop();
//Ya no mostrara Bici por que se elimino



