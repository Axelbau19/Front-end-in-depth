//Crear un servidor para montar el proyecto
import express from 'express';
const app = express();
//Convertirlo  de estatico
app.use(express.static('dist'));
app.listen(8080, () => {
    console.log("Localhost:8080")
});