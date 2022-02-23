import readlineSync from 'readline-sync';
import randonGenerator from '../src/randomizer.js';

const number = randomGenerator(2, 11);

const greeting = () => {
  console.log('Welcome to the Brain Even!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
  
  const question = readlineSync.question(`Question: ${number}`); 
    
};

export default () => greeting();
