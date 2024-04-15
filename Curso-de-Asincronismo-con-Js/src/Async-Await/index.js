const fnAsync = () => {
    return new Promise((resolve,rejected) => {
        (true)
            ? setTimeout(()=> resolve('Async'),2000):
            rejected(new Error('Error'));
    })
};
//No bloquean la aplicacion para que pueda suceder
const anotherFunction = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!!');
};

console.log('Before');
anotherFunction();
console.log('After');