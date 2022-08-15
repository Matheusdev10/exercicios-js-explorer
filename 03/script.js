//capturar 2 numeros
// e fazer as operações
// matematicas de soma subtraçao
// divisao e resto da divisão

let number1 = prompt('digite um número');
let number2 = prompt('digite outro número');

number1 = Number(number1);
number2 = Number(number2);

const mathOperations = () => {
  const sum = number1 + number2;
  const sub = number1 - number2;
  const mult = number1 * number2;
  const div = number1 / number2;
  const restDiv = number1 % number2;
  return alert(`A soma é ${sum} a subtração é ${sub}
  a multiplicação é ${mult}, a divisão é ${div}, 
  o resto da divisão é ${restDiv} `);
};

mathOperations();
