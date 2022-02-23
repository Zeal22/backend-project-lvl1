import readlineSync from 'readline-sync';
import randonGenerator from '../src/randomizer.js';

const greeting = () => {
  console.log('Welcome to the Brain Even!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
    
};

export default () => greeting();
