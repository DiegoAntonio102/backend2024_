const express = require('express');

const app = express();
//ruta raiz

//GET utilizar cuando querramos utilizar información
app.get("/", (req, res) => {
    res.status(404).send("Hola mundo!");
})
app.get("/prueba", (req, res) => {
    res.status(404).send("Hola desde la ruta prueba");
})
//POST crear un nuevo recurso o acceder a un recurso, por ejemplo cuando iniciamos sesion
app.post("/", (req, res) => {
    res.status(200).send("Hola desde POST");
})
//PUT para actualizar un recurso , diferencia actualiza todo el recurso
app.put("/", (req, res) => {
    res.status(200).send("Hola desde PUT");
})
//PATCH para actualizar un recurso; la diferencia es actualiza parcialmente el recurso
app.patch("/", (req, res) => {
    res.status(200).send("Hola desde PATCH");
})

//DELETE eliminar un recurso
    // dura, de la base de datos eliminamos el registro.
    // suave, es simplemente modificar un compo de registro.
app.delete("/", (req, res) => {
    res.status(200).send("Hola desde DELETE");
})

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000/");
});

