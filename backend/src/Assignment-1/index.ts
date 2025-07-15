// index.ts
import readline from 'readline';
import { add, subtract, multiply, divide } from '../lib/math';
import fs from 'fs';

interface Parameters {
  num1: string;
  num2: string;
  add: number;
  subtract: number;
  multiply: number;
  divide: number;
}

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInput.question('Enter first number: ', (num1: string) => {
  console.log(`First number is ${num1}`);
  userInput.question('Enter second number: ', (num2: string) => {
    console.log(`Second number is ${num2}`);

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      console.error('Invalid input. Please enter valid numbers.');
      userInput.close();
      return;
    }

    const results: Parameters = {
      num1,
      num2,
      add: add(n1, n2),
      subtract: subtract(n1, n2),
      multiply: multiply(n1, n2),
      divide: divide(n1, n2),
    };

    copyData(results);
    userInput.close();
  });
});

function copyData({ num1, num2, add, subtract, multiply, divide }: Parameters): void {
  const content: string[][] = [
    ['operation', 'num1', 'num2', 'result'],
    ['add', num1, num2, add.toString()],
    ['subtract', num1, num2, subtract.toString()],
    ['multiply', num1, num2, multiply.toString()],
    ['divide', num1, num2, divide.toString()],
  ];

  const data = content.map(row => row.join(',')).join('\n');
  fs.writeFileSync('output.csv', data);
  console.log('CSV Output:\n' + data);
}
