// Problema
// Solicite 2 numeros , faça a soma deles
// e apresente o resultado final ao usuario

// conversão de dados ( type conversion (type casting))

const somandoNumeros = () => {
  const catchFirstNumber = prompt('Digite o primeiro número');
  const catchSecondNumber = prompt('Agora digite o segundo numero');
  const sumNumbers = catchFirstNumber + Number(catchSecondNumber);
  return alert(`O resultado final é ${sumNumbers}`);
};

somandoNumeros();
