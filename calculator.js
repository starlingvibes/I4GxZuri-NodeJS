// `npm install prompt-sync`
const prompt = require('prompt-sync')();

console.log('\nHello, welcome to my simple Javascript calculator');
console.log(`Supported operations:
    add - outputs the sum of two numbers
    sub - subtracts the second number from the first
    mul - multiplies the two numbers
    div - divides the first number by the second
    mod - takes the modulus of two numbers`);
console.log('***************************************************\n');
const operation = prompt(
  'What operation would you like to perform? '
).toLowerCase();

const firstNumber = parseInt(prompt('Enter first number: '));
const secondNumber = parseInt(prompt('Enter second number: '));

switch (operation) {
  case 'add':
    console.log(
      `\nThe sum of ${firstNumber} and ${secondNumber} is ${
        firstNumber + secondNumber
      }\n`
    );
    break;
  case 'sub':
    console.log(
      `\nThe difference between ${firstNumber} and ${secondNumber} is ${
        firstNumber - secondNumber
      }\n`
    );
    break;
  case 'mul':
    console.log(
      `\nThe product of ${firstNumber} and ${secondNumber} is ${
        firstNumber * secondNumber
      }\n`
    );
    break;
  case 'div':
    console.log(
      `\n${firstNumber} divided by ${secondNumber} is ${
        firstNumber / secondNumber
      }\n`
    );
    break;
  case 'mod':
    console.log(
      `\n${firstNumber} divided by ${secondNumber} is a remainder of ${
        firstNumber % secondNumber
      }\n`
    );
    break;
  default:
    console.log(`\nOperation '${operation}' is not supported :-(\n`);
    break;
}
