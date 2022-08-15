//DESAFIOS ROCKETSEAT EXPLORER

// let numero1 = Number(prompt('Digite um número'));
// let numero2 = Number(prompt('Digite outro numero'));

// const soma = numero1 + numero2;
// const sub = numero1 - numero2;
// const mult = numero1 * numero2;
// const div = numero1 / numero2;
// const rest = numero1 % numero2;

// alert(`A soma é ${soma}
// a subtração é ${sub}
// a multiplicação é ${mult}
// a divisão é ${div}
// o resto da divisão é ${rest}`);

// if (soma % 4 === 0) {
//   alert('a soma é par');
// } else {
//   alert('a soma é impar');
// }

// if (numero1 === numero2) {
//   alert('numeros iguais');
// } else {
//   alert('numeros diferentes');
// }

// let estudantes = [
//   {
//     nome: 'Matheus',
//     nota1: 10,
//     nota2: 5,
//   },
//   {
//     nome: 'Lucas',
//     nota1: 7,
//     nota2: 3,
//   },
//   {
//     nome: 'João',
//     nota1: 3,
//     nota2: 2,
//   },
//   {
//     nome: 'Jessica',
//     nota1: 7,
//     nota2: 8,
//   },
// ];

// const calcularMedia = (estudante) => {
//   alert(
//     ` A media do(a) aluno(a) ${estudante.nome} é: ${
//       (estudante.nota1 + estudante.nota2) / 2
//     }`
//   );

//   if ((estudante.nota1 + estudante.nota2) / 2 >= 7) {
//     alert(`Parabéns ${estudante.nome}! Você foi aprovado(a) no concurso!`);
//   } else {
//     alert(`Não foi dessa vez, ${estudante.nome}! Tente novamente!`);
//   }
// };
// for (let estudante of estudantes) {
//   calcularMedia(estudante);
//}

const patients = [
  {
    name: 'Luiz',
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: 'Alexandra',
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: 'Carlos',
    age: 42,
    weight: 90,
    height: 180,
  },
];

const calcularIMC = (weight, height) => {
  return weight / (height / 100 ** 2).toFixed(2);
};

const pegarImcIndividual = (patient) => {
  alert(
    `${patient.name} possui o IMC de ${calcularIMC(
      patient.weight,
      patient.height
    )}`
  );
};

for (let patient of patients) {
  pegarImcIndividual(patient);
}
