import express from 'express';
import { insertar_registro, consultar_tabla } from './conexion.js';
import path from 'path';

const app = express();
const __dirname = path.resolve();

app.listen('8080', function()
    {
        console.log("Servidor iniciado")
    }
);


app.use(express.static("frontend"));

app.get('/', function(peticion, respuesta)
    {
        respuesta.sendFile(__dirname + "/frontend/register.html");
    }
);

