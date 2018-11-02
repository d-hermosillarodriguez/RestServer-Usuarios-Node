const express = require('express');
const Usuario = require('../models/usuario');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




app.post('/login', (req, res) => {

    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, usurioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!usurioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "(Usuario) o contraseña incorrectos"
                }
            });
        }

        if (!bcrypt.compareSync(body.password, usurioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario o (contraseña) incorrectos"
                }
            });
        }

        let token = jwt.sign({ //creando token
                usuario: usurioDB //definiendo paidload
            }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN }) //primero semilla y la expiracion esta en segundos*minutos*horas*dias

        res.json({
            ok: true,
            usuario: usurioDB,
            token
        });

    });


});









module.exports = app;