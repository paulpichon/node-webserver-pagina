//https://www.npmjs.com/package/express
//express
const express = require('express')
//importar partials 
const hbs = require('hbs');
//dotenv variables de entorno
require('dotenv').config();

//creamos el servidor
const app = express();
//puerto donde corre la aplicacion
//lo hacemos mediante variables de entorno; procces.env.PORT
const port = process.env.PORT;



//HANDLEBARS
//para renderizar HTML
//hbs
app.set('view engine', 'hbs');
//registro de partials
hbs.registerPartials(__dirname + '/views/partials');

//middleware para mostrar la pagina public
//servir contenido estatico
//'public' ---> este es el path donde esta nuestro contenido
app.use( express.static('public') );

//al mostrarse contenido con app.use( express.static('public') ); las lineas de abajo jamas se ejecutaran
// app.get('/', function (req, res) {
//   res.send('home page');
// });

// The res.sendFile() function basically transfers the file at the given path and it sets the Content-Type response HTTP header field based on the filename extension. 
app.get('/', ( req, res) => {
    //renderizar 
    res.render('home');
});

app.get('/generic', ( req, res) => {
    // res.sendFile(__dirname + '/public/generic.html');
    res.render('generic');
});

app.get('/elements', ( req, res) => {
    // res.sendFile(__dirname + '/public/elements.html');
    res.render('elements');
});

//cualquier otra ruta que no sea las de arriba muestre una pagina de error
app.get('*', ( req, res ) => {
    //En lugar de esto res.send( '404 | Page Not Found '); se muestra una pagina html, pero con res.sendFile()
    //console.log( __dirname ); el __dirname nos muestra el path absoluto en este caso es C:\Users\paul1\Desktop\WebServerNode
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});