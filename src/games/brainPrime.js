import newGames from '../index.js';
import randomGenerator from '../randomizer.js';

const questionToStart = '"yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => num % 2 || num % 3 === 0;

const generateQuestion = () => {
  const number = randomGenerator(3, 11);

  const question = number.toString();

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

export default () => newGames(generateQuestion, questionToStart);
