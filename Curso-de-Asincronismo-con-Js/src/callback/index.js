//Callback
function sum(num1, num2){
    return num1+num2;
}

function calc(num1,num2,callback){
    return callback(num1,num2);
};

console.log(calc(1,5,sum));

//Tiempo para ejecutar el codigo
setTimeout(function(){
    console.log(`Js`)
},2000 );

function gretting(name){
    console.log(`Hello, ${name}`);
}

setTimeout(gretting, 2000,'Axel');
