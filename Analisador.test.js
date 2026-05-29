const classificarNota = require('./Analisador');

describe('Desafio Parte II - Cobertura 100%', () => {

    test('Deve retornar Excelente para nota 90 ou superior', () => {
        expect(classificarNota(95)).toBe('Excelente');
    });

    test('Deve retornar Bom para nota entre 70 e 89 (Linha 3)', () => {
        expect(classificarNota(75)).toBe('Bom');
    });

    test('Deve retornar Recuperação para nota entre 50 e 69 (Linha 5)', () => {
        expect(classificarNota(55)).toBe('Recuperação');
    });

    test('Deve retornar Reprovado para nota abaixo de 50 (Linha 7)', () => {
        expect(classificarNota(40)).toBe('Reprovado');
    });

});