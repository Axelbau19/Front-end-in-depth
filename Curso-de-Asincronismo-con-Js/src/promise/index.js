 //Creamos nuestro objeto de tipo promesa, en donde va recibir una funcion con los parametro de resolver  o rechazado 
 const promise = new Promise(function(resolve,rejected){
    resolve(`Correcto`);
 });
//Aqui otro ejemplo
//Creamos nuestra constante
 const cows = 5;
 //Creamos nuestro objeto que va recibir una funcion con los parametros de resolver y rechazado, 
 const countCow = new Promise(function(resolve,rejected){
    //dentro del if vamos evaluar que si nuestra vacas cumple la condicion , significa que esta resuelto y es aceptado y lanza el mensaje
    if(cows > 10){
        resolve(`We have ${cows}`);
    
    }else{ //pero si no, lanza un rechazado
        rejected("No, there isn't cows on the farm ")
    }
 })

 //hacemos que funcione la promesa 
 countCow.then((result)=> { //si se cumple la promesa se imprimira el resolve
    console.log(result);
 }).catch((error)=>{
    //si hay un error o rechazado se imprimira el mensaje de rechazado
    console.log(error)
 }).finally(()=> {
    //y finalmente cuando termine , lanzara esta funcion  
    console.log('End')
 });



 function delay(time, message) {
  
    return new Promise(function (resolve, rejected) {
      if (time > 0) {
        setTimeout(() => { 
          resolve(message);
        }, time);
      } else {
        rejected("Negative time")
      }
    });
  }
  
  delay(3000, "Hello after 3s").then((message) => console.log(message)).catch((error) => { console.log(error) }).finally('End');