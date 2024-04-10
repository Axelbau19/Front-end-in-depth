function greeting(){
    //nuestra variable declarada y asignada
    let useName = 'Axel';
    console.log(useName);
    //Aqui si se puede usar la variable 
    if(useName=== 'Axel'){
        console.log(`Hello, ${useName}`);
    }
}

greeting();
//Aqui no puede acceder a la variable
console.log(useName);// por solamente existe en la funcion