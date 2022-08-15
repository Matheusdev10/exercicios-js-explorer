/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

// Math.randon(vai gerar um numero aleatorio)
// Math.ceil(arredonda pra cima)
//math.floor ( arredonda para baixo)
// Math.round(se for 1.5 arredonda pra cima, abaixo disso arredonda
//     para baixo)

// let result = prompt('Advinhe o número que estou pensando? Está entre 0 e 10');
// const randomNumber = Math.round(Math.random() * 10);
// let xAttempts = 1;
// while (Number(result) != randomNumber) {
//   result = prompt('Erro, tente novamente:');
//   xAttempts++;
// }
// if (Number(result) && randomNumber === 1) {
//   alert('Parabéns voce adivinhou o número em 1 tentativa');
// } else {
//   alert(`Parabéns! Você advinhou o número em ${xAttempts} tentativas`);
// }

//math.radom * 10 ele vai gerar numeros aleatorios de 0 a 9
// math.ceil(math.ramdom()*10) arredonda pra cima
// e portanto consegue pegar o numero 10, mas nao pega
// o 0. Caso eu queire pegar o 0 eu uso o
//math.round(math.random() *10)
// round => consegue pegar o 10 e o 0
//const randomNumber = Math.round(Math.round() * 10);
// todas as vezes que eu executar o app
// vai gerar um numero aleatorio

// ------------TREINANDO--------------

// let mesage = prompt('Advinhe o número que estou pensando? Está entre 0 e 10');
// let numeroAleatorio = Math.round(Math.random() * 10);
// let numeroTentativas = 1;

// while (Number(mesage) != numeroAleatorio) {
//   mesage = prompt('Erro, tente novamente');
//   numeroTentativas++;
// }
// if (Number(mesage) && numeroAleatorio == 1) {
//   mesage = prompt('Parabéns voce acertou na primeira tentativa');
// } else {
//   mesage = prompt(`Parabéns voce acertou em ${numeroTentativas} tentativas`);
// }
