//Mal opcion
//function moneyBox(money){
 //   let saveMoney = 0;
   // saveMoney+=money;
    //console.log(`Money Box: ${saveMoney}`);
//}
//moneyBox(5);

function moneyBox(){
    let saveMoney = 0;
    function countMoneyFunction(money){
        saveMoney+=money
        console.log(`Money Box: ${saveMoney}`)
    }
    return countMoneyFunction;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(20);

