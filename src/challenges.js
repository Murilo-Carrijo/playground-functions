// Desafio 1 - Crie uma função usando o operador &&
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2 - Crie uma função que calcule a área de um triângulo
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3 - Crie uma função que divida a frase
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4 - Crie uma função que use concatenação de strings
function concatName(arrText) {
  const first = arrText[0];
  for (let i = 0; i < arrText.length; i += 1) {
    if ((i + 1) >= arrText.length) {
      const last = arrText[i];
      return `${last}, ${first}`;
    }
  }
}

// Desafio 5 - Crie uma função que calcule a quantidade de pontos no futebol
// Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
function footballPoints(wins, ties) {
  const winsPoints = wins * 3;
  const tiesPoints = ties;

  return winsPoints + tiesPoints;
}

// Desafio 6 - Crie uma função que calcule a repetição do maior número
function increment(numbers, highestNumber) {
  let cont = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === highestNumber) {
      cont += 1;
    }
  }
  return cont;
}

function highestCount(numbers) {
  let highestNumber = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber || (highestNumber === 0 && numbers[index] < highestNumber)) {
      highestNumber = numbers[index];
    }
  }
  return increment(numbers, highestNumber);
}

// Desafio 7 - Crie uma função de Caça ao Rato
// Exemplo: caso o gato `cat2` esteja a 2 unidades de distância do rato, e `cat1` esteja a 3 unidades, sua função deverá retornar `"cat2"`.
// Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge"

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  } if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  } if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
}

// Desafio 8 - Crie uma função FizzBuzz
// Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";
// Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";
// Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
// Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";

function conditions(number) {
  let result = '';
  if ((number % 3 === 0) && (number % 5 === 0)) {
    result = 'fizzBuzz';
  } else if (number % 3 === 0) {
    result = 'fizz';
  } else if (number % 5 === 0) {
    result = 'buzz';
  } else result = 'bug!';

  return result;
}

function fizzBuzz(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i += 1) {
    result.push(conditions(numbers[i]));
  }
  console.log(result);
  return result;
}

// Desafio 9 - Crie uma função que Codifique e Decodifique
function encode(code) {
  const codeA = code.replace(/a/gi, 1);
  const codeE = codeA.replace(/e/gi, 2);
  const codeI = codeE.replace(/i/gi, 3);
  const codeO = codeI.replace(/o/gi, 4);
  const codeU = codeO.replace(/u/gi, 5);
  console.log(codeU);
  return codeU;
}
function decode(code) {
  const code1 = code.replace(/1/gi, 'a');
  const code2 = code1.replace(/2/gi, 'e');
  const code3 = code2.replace(/3/gi, 'i');
  const code4 = code3.replace(/4/gi, 'o');
  const code5 = code4.replace(/5/gi, 'u');
  console.log(code5);
  return code5;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
