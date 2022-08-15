/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
  {
    name: 'Matheus',
    age: 24,
    weight: 70,
    height: 180,
  },
  {
    name: 'Jessica',
    age: 27,
    weight: 60,
    height: 160,
  },
  {
    name: 'Fernando',
    age: 30,
    weight: 80,
    height: 190,
  },
];

let patientNames = [];

for (let patient of patients) {
  patientNames.push(patient.name);
  patientNames.push(patient.age);
  patientNames.push(patient.height);
  patientNames.push(patient.weight);
}

alert();

// ----------OBSERVAÇÃO----------------
// se eu colocar alert dentro do escopo do for
// o for vai rodar a primeira vez
// vai pegar o paciente dinamico e depois ele roda
// o alert antes de pegar o segundo paciente
// portanto, eu devo deixar o alert de fora do escopo
// do for, porque ele vai percorrer todo o array
// com os dados que eu quero, e só depois vai me entregar
// todos os dados que eu pedi de uma vez só

// for (let i = 0; i < patients.length; i++) {
//   alert(
//     `${(patientNames[i] = patients[i].name)} tem ${(patientNames[i] =
//       patients[i].age)} anos,${(patientNames[i] =
//       patients[i].height)} de altura, e pesa ${(patientNames[i] =
//       patients[i].weight)}kg`
//   );
// }

// for (let patient of patients) {
//   patientsNames.push(patient.name);
//   patientsNames.push(patient.age);
//   patientsNames.push(patient.height);
//   patientsNames.push(patient.weight);
// }

// for (let index = 0; index < patients.length; index++) {
//   patientsNames[index] = patients[index].name;
// }
