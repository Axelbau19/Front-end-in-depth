//Importamos modulos
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//Conexion con la API
function fetchData(urlApi){
    return fetch(urlApi);
}

//fetchData(`${API}/products`).then(response => response.json()).then(products =>{
  //  console.log(products);
//}).catch(error =>{console.log(error)});
//Hace la peticion
//Primera peticion obtener los objetos
fetchData(`${API}/products`)
//convertir la respuesta en formato json
.then(response => response.json())
//obtener los productos
.then(products => {
    console.log(products);
    //Llamar un articulo en particular pero volviendo a llamar la funcion
    return fetchData(`${API}/products/${products[0].id}`)})
    //convertir la info del objeto en particular en JSON
.then(response => response.json())
.then(product =>{
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json())
.then(category =>{console.log(category.name)})
.catch(err =>{console.log(err)}).finally(()=>{console.log('end')});
