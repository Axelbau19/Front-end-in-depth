import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
function postData(urlApi,data){
    const response = fetch(urlApi,{
        //Agregar la peticion
        method: 'POST',
        //modo permisos que va tener
        mode: 'cors',
        //
        credentials: 'same-origin',
        //Cabeceras para enviar la solicitud 
        headers:{
            //Contenido Application JSON
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

function putData(urlApi,data){
    const response = fetch(urlApi,{
        //Agregar la peticion
        method: 'PUT',
        //modo permisos que va tener
        mode: 'cors',
        //
        credentials: 'same-origin',
        //Cabeceras para enviar la solicitud 
        headers:{
            //Contenido Application JSON
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

function deleteData(urlApi,data){
    const response = fetch(urlApi,{
        //Agregar la peticion
        method: 'DELETE',
        //modo permisos que va tener
        mode: 'cors',
        //
        credentials: 'same-origin',
        //Cabeceras para enviar la solicitud 
        headers:{
            //Contenido Application JSON
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}




const newArticle = {
    "title": "Agua O3O",
    "price": 10,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  };

///Agregar un producto
postData(`${API}/products`,newArticle)
.then(response => response.json())
//No le pongas llaves xd que te sale undefine
.then( newArticle=> console.log(newArticle));


const updateArticle = {
    "title": "Obo",
  "price": 100
}

putData(`${API}/products/62`,updateArticle)
.then(response => response.json())
.then(updateArticle => console.log(updateArticle));

deleteData(`${API}/products/62`)
.then(response =>{
    if(response.ok){
        console.log("Se elimino")
    }else{
        console.log("No se elimino")
    }
})
