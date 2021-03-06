var form = document.getElementById("form");

form.addEventListener('submit', function(e){
    e.preventDefault();
    var fd = new FormData(form);

    var datos = {
        method: "POST",
        body: fd 
    };

    

    fetch('https://p1-w2.herokuapp.com/Sesion', datos)
    .then( res => res.json())
    .then( data => {
        console.log(data.cedula + "" + data.nombre + "" + data.apellido + "" + data.fdn + "" + data.password + "" + data.email)
        document.getElementById("h1").innerHTML = `Bienvenido ${data.nombre}`;
        document.getElementById("cedula").innerHTML = data.cedula;
        document.getElementById("nombre").innerHTML = data.nombre;
        document.getElementById("apellido").innerHTML = data.apellido;
        document.getElementById("fdn").innerHTML = data.fdn;
        document.getElementById("password").innerHTML = data.password;
        document.getElementById("email").innerHTML = data.email;
        window.self
    })
    .catch(error => console.error());

});