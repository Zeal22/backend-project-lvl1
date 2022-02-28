import newGames from '../index.js';
import randomGenerator from '../randomizer.js';

const questionToStart = '"yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num % 2 === 0) {
    return false;
  }
  if (num % 3 === 0) {
    return false;
  }
  return true;
};

const generateQuestion = () => {
  const number = randomGenerator(3, 20);

  const question = number.toString();

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

export default () => newGames(generateQuestion, questionToStart);
