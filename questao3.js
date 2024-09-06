// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora,
//  faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados.
// Estes dias devem ser ignorados no cálculo da média;

const dados = require("./dados.json");

function calcularMenorMaiorFaturamento(dados) {
  let menor = null;
  let maior = null;

  dados.forEach((faturamento) => {
    if (faturamento.valor > 0) {
      if (maior === null || faturamento.valor > maior.valor)
        maior = faturamento;
      if (menor === null || faturamento.valor < menor.valor)
        menor = faturamento;
    }
  });

  return { menor, maior };
}

function calcularMediaFaturamento(dados) {
  let soma = 0;
  let diasComFaturamento = 0;

  dados.forEach((faturamento) => {
    if (faturamento.valor > 0) {
      diasComFaturamento++;
      soma += faturamento.valor;
    }
  });

  const media = soma / diasComFaturamento;
  return media;
}

function contarDiasAcimaDaMedia(dados, media) {
  let diasAcimaDaMedia = 0;

  dados.forEach((faturamento) => {
    if (faturamento.valor > media) {
      diasAcimaDaMedia++;
    }
  });

  return diasAcimaDaMedia;
}


const { menor, maior } = calcularMenorMaiorFaturamento(dados);
const media = calcularMediaFaturamento(dados);
const diasAcimaDaMedia = contarDiasAcimaDaMedia(dados, media);

console.log(`
Menor faturamento: Dia ${menor.dia}, Valor: R$ ${menor.valor.toFixed(2)}
Maior faturamento: Dia ${maior.dia}, Valor: R$ ${maior.valor.toFixed(2)}

Média de faturamento: R$ ${media.toFixed(2)}
Dias com faturamento acima da média: ${diasAcimaDaMedia} Dias
    `);
