require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Permite decodificar informacion enviada por x-www-form...
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/usuario', function(req, res) {
    res.json('get Usuario'); //Respuesta formato json
});
app.post('/usuario', function(req, res) {
    let body = req.body; //extraigo la informacion desde x-www-form-urlencoded

    if (body.nombre === undefined || body.nombre === '') {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            body
        }); //Respuesta formato json
    }


});
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id,
        ok: true
    });

});
app.delete('/usuario', function(req, res) {
    res.json('delete Usuario'); //Respuesta formato json
});
app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto ${process.env.PORT}`);
});