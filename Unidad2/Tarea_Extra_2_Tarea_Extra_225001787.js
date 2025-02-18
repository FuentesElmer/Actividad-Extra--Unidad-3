function jugar() {
    let nombre = "Elmer Leonel De La Cruz Fuentes";
    let carnet = "25001787"; // Reemplaza con tu nÃºmero de carnet
    
    while (true) {
        let numeroComputadora = Math.floor(Math.random() * 9) + 1;
        let numeroUsuario;
        
        do {
            numeroUsuario = parseInt(prompt("Ingrese un nÃºmero entre 3 y 6:"));
        } while (isNaN(numeroUsuario) || numeroUsuario < 3 || numeroUsuario > 6);
        
        let eleccion = prompt("Â¿Tu nÃºmero es mayor, menor o igual al de la computadora? (Escribe: mayor, menor o igual)").toLowerCase();
        
        let mensaje = `La computadora eligiÃ³ ${numeroComputadora}, usted eligiÃ³ ${numeroUsuario}. `;
        
        if ((eleccion === "mayor" && numeroUsuario > numeroComputadora) ||
            (eleccion === "menor" && numeroUsuario < numeroComputadora) ||
            (eleccion === "igual" && numeroUsuario === numeroComputadora)) {
            mensaje += "Â¡Ha adivinado!";
        } else {
            mensaje += "No ha adivinado.";
        }
        
        alert(mensaje);
        
        let jugarDeNuevo = prompt("Â¿Quiere jugar otra vez? (SI/NO)").toUpperCase();
        if (jugarDeNuevo !== "SI") {
            alert(`Gracias por jugar, ${nombre}. NÃºmero de carnet: ${carnet}`);
            break;
        }
    }
}

jugar();