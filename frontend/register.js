document.getElementById('boton_registrar').addEventListener('click', registrar);

function registrar()
{
    let Nombre = document.getElementById('Nombre').value;
    let Correo = document.getElementById('Correo').value;
    let Telefono = document.getElementById('Telefono').value;
    let Contrasena = document.getElementById('Contrasena').value;

    console.log(Nombre +" "+ Correo +" "+ Telefono +" "+ Contrasena);

}