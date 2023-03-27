"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
var zodiaco = "";
function zodiac(day, month) {
    if ((day <= 20 && month == "enero") || (day <= 18 && month === "febrero")) {
        return "Acuario";
    }
    else if ((day >= 19 && month == "febrero") || (day <= 20 && month == "marzo")) {
        return "Piscis";
    }
    else if ((day >= 21 && month == "marzo") || (day <= 19 && month == "abril")) {
        return "Aries";
    }
    else if ((day >= 20 && month == "abril") || (day <= 20 && month == "mayo")) {
        return "Tauro";
    }
    else if ((day >= 21 && month == "mayo") || (day <= 20 && month == "junio")) {
        return "Geminis";
    }
    else if ((day >= 21 && month == "junio") || (day <= 22 && month == "julio")) {
        return "Cancer";
    }
    else if ((day >= 23 && month == "julio") || (day <= 22 && month == "agosto")) {
        return "Leo";
    }
    else if ((day >= 23 && month == "agosto") || (day <= 22 && month == "sptiembre")) {
        return "Virgo";
    }
    else if ((day >= 23 && month == "septiembre") || (day <= 22 && month == "octubre")) {
        return "Libra";
    }
    else if ((day >= 23 && month == "octubre") || (day <= 21 && month == "noviembre")) {
        return "Escorpio";
    }
    else if ((day >= 22 && month == "noviembre") || (day <= 21 && month == "diciembre")) {
        return "Sagitario";
    }
    else if ((day >= 22 && month == "diciembre") || (day <= 19 && month == "enero")) {
        return "Capricornio";
    }
}
// console.log(zodiac(26, "diciembre"));
function continent(country) {
    if (country == "españa" || country == "portugal" || country == "italia" || country == "francia" || country == "alemania") {
        console.log("Europa");
    }
    else if (country == "congo" || country == "sudafirca" || country == "angola" || country == "kenia" || country == "malawi") {
        console.log("Africa");
    }
    else if (country == "canada" || country == "panama" || country == "honduras" || country == "estados unidos" || country == "venezuela") {
        console.log("America");
    }
    else if (country == "india" || country == "iran" || country == "Kirguistán" || country == "japon" || country == "china") {
        console.log("Asia");
    }
    else if (country == "australia" || country == "nueva zelanda" || country == "tonga" || country == "nauru" || country == "vanuatu") {
        console.log("Oceania");
    }
}
// continent("tonga");
function isEven(number) {
    if (number % 2 == 0) {
        console.log("el numero es par");
    }
    else {
        console.log("el numero es impar");
    }
}
exports.isEven = isEven;
// isEven(3);
