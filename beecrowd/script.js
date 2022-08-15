// ---- PROBLEMA BEECROWD LANCHE
// let numeroCodigo = Number(prompt('Digite o codigo do produto'));
// let numeroQuantidade = Number(
//   prompt('Agora digite a quantidade desse produto')
// );
// let items = [
//   {
//     codigo: 1.0,
//     preço: 4.0,
//   },
//   {
//     codigo: 2.0,
//     preço: 4.5,
//   },
//   {
//     codigo: 3.0,
//     preço: 5.0,
//   },
//   {
//     codigo: 4.0,
//     preço: 2.0,
//   },
//   {
//     codigo: 5.0,
//     preço: 1.5,
//   },
// ];

// for (let item of items) {
//   item[items];
//   if (numeroCodigo === item.codigo) {
//     let result = `Total: R$ ${Number(numeroQuantidade * item.preço).toFixed(
//       2
//     )}`;
//     alert(result);
//   }
// }

// for (let i = 0; i < items.length; i++) {
//   let item = items[i];
//   if (numeroCodigo == item.codigo) {
//     alert(`Total: R$ ${numeroQuantidade * item.preço}`);
//   }
// }

// ---- PROBLEMA BEECROWD DDD

// let DDDCodigoDiscagens = [
//   {
//     ddd: 61,
//     destination: 'Brasilia',
//     ddd: 71,
//     destination: 'Salvador',
//     ddd: 11,
//     destination: 'Sao paulo',
//     ddd: 21,
//     destination: 'Rio de janeiro',
//     ddd: 32,
//     destination: 'Juiz de fora',
//     ddd: 19,
//     destination: 'Campinas',
//     ddd: 27,
//     destination: 'Vitoria',
//     ddd: 31,
//     destination: 'Belo Horizonte',
//   },
// ];

// for (let DDDCodigoDiscagen of DDDCodigoDiscagens) {
//   DDDCodigoDiscagen[DDDCodigoDiscagens];
//   console.log(DDDCodigoDiscagen);
// }

// ------Senha Fixa--------

// const senhaCorreta = 2002;
// let senhaDigitada = prompt('digite a senha');
// while (senhaCorreta != senhaDigitada) {
//   alert('Senha invalida');
//   senhaDigitada = prompt('digite a senha');
//   if (senhaCorreta == senhaDigitada) {
//     alert('Acesso Permitido');
//   }
// }

const notas = [-3.5, 3.5, 11.0, 10.0];
for (let nota of notas) {
  nota[notas];
  if (nota > 0 && nota <= 10) {
    const media = (nota + nota) / 2;
    alert(media);
  }
}
