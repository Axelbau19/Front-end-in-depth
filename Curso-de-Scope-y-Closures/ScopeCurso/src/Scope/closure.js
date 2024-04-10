//Funciones anidadas
'use strict';
const myGlobal = 0;
function myFunction(){
    const myNumber = 1;
    console.log(myGlobal); //Aqui tiene acesso a global
    function parent(){
        const inner = 2;
        console.log(myNumber,myGlobal);//Aqui tiene acesso global y mynumber
        function child(){
            console.log(inner,myNumber,myGlobal); //aqui tiene acceso a inner, mynumber y global
        }
        return child();
    }
    return parent();
}

myFunction();