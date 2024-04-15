const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//Conectarse con la API
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI, callback){
    //Crear nuestro objeto 
    let xhttp = new XMLHttpRequest();
    //Abrir una conexion al API // (peticion, url de la Api, booleano para habilitarlo)
    xhttp.open('GET',urlAPI,true);
    //EventHandler es para cuando hace el cambio de estado
    //0 -> Se ha inicializado
    //1 -> Loading
    //2 -> Se ha cargado
    //3 -> Procesando si existe alguna carga
    //4 -> Completo
    xhttp.onreadystatechange = function(event){
        //Cuando cumple el estado accede al if
        if(xhttp.readyState === 4){
            //Si hay una respuesta satifactoria 200 HTTP, podra acceder 
            if(xhttp.status === 200){
                //(null, convertir la respuesta de la peticion  en formato JSON)
                callback(null,JSON.parse(xhttp.responseText));
            }//Si hay un error
            else{
                const error = new Error('Error'+ urlAPI);
                //error y como fallo no hay respuesta 
                callback(error,null);
            }
        }
    }
    //Enviar la logica
    xhttp.send();
}
//No abusar con el codigo spaggueti (funciones anidadas)
//Se pasa en comillas para evitar concatenar 
fetchData(`${API}/products`,function(error1,data1){
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function(error2,data2){
        if(error2) return console.error(error2);
        //Optional chaining
        fetchData(`${API}/categories/${data2?.category?.id}`,function(error3,data3){
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    })
});
