function getDataForm() {
    
        let name = document.getElementById('nombre').value;
        let lastName = document.getElementById('apellido').value;
        let celular = document.getElementById('celular').value;
        let email = document.getElementById('correo').value;
        let contraseña = document.getElementById('contraseña').value;

        if (name === "" || lastName === "" || celular === "" || email === "" || contraseña === "") {
            alert("Por favor, complete todos los campos.");
        } else {
            alert("¡Registro exitoso!");
        }
    }

function funcionGota() {
    let nombreVictima = document.getElementById('nombre_gota').value;
    let lastName = document.getElementById('apellido_gota').value;
    let initialmoney = parseFloat(document.getElementById('inputDinero').value);
    let timemoney = parseFloat(document.getElementById('inputTiempo').value);

    if (nombreVictima === "" || lastName === "" || initialmoney === "" || timemoney === "") {
        alert("Por favor, complete todos los campos.");
    } else {
        let valorcuota = (initialmoney * (timemoney * 0.2)) + initialmoney;
        document.getElementById('outputCuota').value = valorcuota;
        alert("¡Registro exitoso - Nuestros asesores se contactaran pronto!");
    }
    
}
