import mysql from "mysql";

const conexion = mysql.createConnection ({
    host: 'localhost',
    database: 'radica',
    user: 'root',
    password: 'Margarita1128'
    }
);

conexion.connect(function(error){
    if(error){
        throw error;
    }
    else {
        console.log("Conexion exitosa");
    }
});

function insertar_registro ()
{
conexion.query("INSERT INTO usuarios(Nombre, Correo, Telefono, Contrasena) VALUES ( 'maria', 'mago@gmail.com', '3148099989', '123456')", function(error)
{
    if(error){
        throw error;
    }
    else{
        console.log("Registro Exitoso");
    }
}
);
}

function consultar_tabla () {
conexion.query("SELECT * FROM usuarios", function(error, resultados)
    {
        if(error){
            throw error;
        }
        else{
            for(let i=0; i<resultados.length; i++){
                console.log(resultados[i].ID +" "+ resultados[i].Nombre +" "+ resultados[i].Correo +" "+ resultados[i].Telefono +" "+ resultados[i].Contrasena); 
            }
            
        }
    }
);
}

/*conexion.query("UPDATE usuarios SET Nombre= 'Giovany' WHERE ID=2", function
(error, )
    {
        if (error){
            throw error;
        }
        else {
        console.log("El registro fue actualizado");
        }
    }
);

conexion.query("DELETE FROM usuarios WHERE nombre='maria'", function(error)
    {
        if(error){
            throw error;
        }
        else {
            console.log("Los registros fueron eliminados");
        }
    }
); */

export {insertar_registro, consultar_tabla};