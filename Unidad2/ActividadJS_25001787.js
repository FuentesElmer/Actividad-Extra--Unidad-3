
// datos digitados 
 let mes = parseInt(prompt("Ingresa tu mes de nacimiento en #"));
let dia = parseInt(prompt("Ingresa tu dÃ­a de nacimiento en #"));
let sig = "";
// signo basado en el mes y dÃ­a
if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
    sig = "Aries";
} else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)) {
    sig = "Tauro";
} else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    sig = "GÃ©minis";
} else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    sig = "CÃ¡ncer";
} else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 23)) {
    sig = "Leo";
} else if ((mes == 8 && dia >= 24) || (mes == 9 && dia <= 22)) {
    sig = "Virgo";
} else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 23)) {
    sig = "Libra";
} else if ((mes == 10 && dia >= 24) || (mes == 11 && dia <= 22)) {
    sig = "Escorpio";
} else if ((mes == 11 && dia >= 23) || (mes == 12 && dia <= 21)) {
    sig = "Sagitario";
} else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)) {
    sig = "Capricornio";
} else if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 19)) {
    sig = "Acuario";
} else if ((mes == 2 && dia >= 20) || (mes == 3 && dia <= 20)) {
    sig = "Piscis";
} else {
    sig = "Fecha invÃ¡lida";
}

alert(`Tu signo zodiacal es: ${sig}`);