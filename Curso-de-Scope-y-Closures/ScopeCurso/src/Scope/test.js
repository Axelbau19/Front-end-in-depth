export function sumWithClosure(firstNum) {
    // Tu código aquí 👈
      return function sumWithClosure2(secondNum) {
      if(secondNum == undefined){
        return firstNum;
      }
      return firstNum + secondNum;
    }
  }
  
console.log(  sumWithClosure(20)(0));