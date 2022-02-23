import readlineSync from 'readline-sync';
import randonGenerator from '../randomizer.js';

const greeting = () => {
  console.log('Welcome to the Brain Even!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
  
  
  const 
};

export default () => greeting();
