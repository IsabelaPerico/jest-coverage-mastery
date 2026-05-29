# Desafio de Cobertura de Testes - Analisador de Notas
Este projeto foi desenvolvido para demonstrar a aplicação de Testes de Caixa Branca utilizando o framework Jest. 
O objetivo principal foi elevar a cobertura de testes de um analisador de notas de 75% para 100%, garantindo que todos os fluxos lógicos fossem validados.

# Tecnologias Utilizadas
JavaScript (Node.js)
Jest (Framework de Testes)

# Conceitos Aplicados
Teste de Caixa Branca: Análise da estrutura interna do código para criação de casos de teste.
Cobertura de Ramificações (Branch Coverage): Garantia de que todos os caminhos de decisão (if, else if, else) foram percorridos.
Análise de Relatório de Coverage: Interpretação das tabelas geradas pelo comando jest --coverage.

# Evolução da Cobertura
# Cenário Inicial
No primeiro relatório, o código apresentava 75% de cobertura, com as linhas 5 e 7 
(referentes às classificações "Recuperação" e "Reprovado") sem validação.

# Cenário Final (Após Refatoração dos Testes)
Após identificar as lacunas lógicas, foram adicionados casos de teste para os limites de 
nota 50 e notas inferiores, atingindo o estado de Full Coverage.

 % Stmts%    Branch%   Funcs%    Lines
   100	      100	      100	      100

# Como rodar os testes
Instale as dependências:
## npm install

# Execute os testes com o relatório de cobertura:
npx jest --coverage
