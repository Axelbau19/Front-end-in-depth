function greeting(){
    let name = 'Axel';
    return function displayUserName(){
        return `Hello, ${name};`
    }
}

const gretting = greeting();
console.log(gretting);
console.log(gretting());