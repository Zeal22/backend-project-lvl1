import readlineSync from 'readline-sync';
import randomGenerator from '../src/randomizer.js';

const number = randomGenerator(2, 11);

const greeting = () => {
  console.log('Welcome to the Brain Even!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
  
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
    
};

export default () => greeting();
