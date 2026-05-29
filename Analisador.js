function classificarNota(nota) {
    if (nota >= 90) {
        return "Excelente";
    } else if (nota >= 70) {
        return "Bom";
    } else if (nota >= 50) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}
module.exports = classificarNota;