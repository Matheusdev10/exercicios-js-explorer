/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

// const patients = [
//   {
//     name: 'Luiz',
//     age: 20,
//     weight: 100,
//     height: 190,
//   },
//   {
//     name: 'Alexandra',
//     age: 27,
//     weight: 70,
//     height: 170,
//   },
//   {
//     name: 'Carlos',
//     age: 42,
//     weight: 90,
//     height: 180,
//   },
// ];

// function IMC(weight, height) {
//   return (weight / (height / 100) ** 2).toFixed(2);
// }

// function printPatientIMC(patient) {
//   return `
//     Paciente ${patient.name} possui o IMC de
//     ${IMC(patient.weight, patient.height)}
//   `;
// }

// for (let patient of patients) {
//   let IMCmessage = printPatientIMC(patient);
//   alert(IMCmessage);
// }

/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

// const patients = [
//   {
//     name: 'Luiz',
//     age: 20,
//     weight: 100,
//     height: 190,
//   },
//   {
//     name: 'Alexandra',
//     age: 27,
//     weight: 70,
//     height: 170,
//   },
//   {
//     name: 'Carlos',
//     age: 42,
//     weight: 90,
//     height: 180,
//   },
// ];

// const calcularIMC = (weight, height) => {
//   return (weight / (height / 100) ** 2).toFixed(2);
// };

// const pegarImcIndividual = (patient) => {
//   return `${patient.name} possui o IMC de ${calcularIMC(
//     patient.weight,
//     patient.height
//   )}`;
// };

// for (let patient of patients) {
//   let imcMensagem = pegarImcIndividual(patient);
//   alert(imcMensagem);
// }

// let nameStudent = prompt('Qual seu nome?');
// nameStudent = nameStudent.toUpperCase();
// let grade1 = prompt('digite sua primeira nota');
// let grade2 = prompt('digite sua segunda nota');
// let grade3 = prompt('digite sua terceira nota');
// grade1 = Number(grade1);
// grade2 = Number(grade2);
// grade3 = Number(grade3);
// const calculateAverage = () => {
//   let calculateAverage = (grade1 + grade2 + grade3) / 3;
//   calculateAverage = calculateAverage.toFixed(2);
//   let result = calculateAverage > 6;
//   if (result) {
//     alert(
//       `Parabéns ${nameStudent}, sua média foi ${calculateAverage} e, portanto, você foi aprovado!!.`
//     );
//   } else
//     alert(
//       `${nameStudent}, sua média foi ${calculateAverage} e, portanto, você foi reprovado.Estude para a prova de recuperação!!`
//     );
//   return result;
// };
// calculateAverage();
let count = 1;
const notas = [-3.5, 3.5, 11.0, 10.0];
for (let nota of notas) {
  nota[notas];

  if (nota > 0 && nota <= 10) {
    count++;
  }
  while (count >= 4 && count > 0) {
    alert('Ola');
  }
}

//   alert((nota + nota) / 2);
// } else if(nota == 2)
// }

// let notas = [-3.5, 3.5, 11.0, 10.0];
// for (let nota = 0; nota <= 10; nota++) {

//
