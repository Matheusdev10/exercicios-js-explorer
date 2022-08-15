/*
  Solicitar o nome do aluno 
  e as 3 notas do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let nameStudent = prompt('Qual seu nome?');
nameStudent = nameStudent.toUpperCase();
let grade1 = prompt('digite sua primeira nota');
let grade2 = prompt('digite sua segunda nota');
let grade3 = prompt('digite sua terceira nota');
grade1 = Number(grade1);
grade2 = Number(grade2);
grade3 = Number(grade3);
const calculateAverage = () => {
  let calculateAverage = (grade1 + grade2 + grade3) / 3;
  calculateAverage = calculateAverage.toFixed(2);
  let result = calculateAverage > 6;
  if (result) {
    alert(
      `Parabéns ${nameStudent}, sua média foi ${calculateAverage} e, portanto, você foi aprovado!!.`
    );
  } else
    alert(
      `${nameStudent}, sua média foi ${calculateAverage} e, portanto, você foi reprovado.Estude para a prova de recuperação!!`
    );
  return result;
};
calculateAverage();
