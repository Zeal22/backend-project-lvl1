import newGames from '../index.js';
import randomGenerator from '../randomizer.js';

const isGcd = (num1, num2) => {
  if(!num2) {
    return num1;
  }
  return isGcd(num2, num1 % num2);
};

const questionToStart = 'Find the greatest common divisor of given numbers.';

const generateQuestion = () => {
  const firstNumber = randomGenerator(2, 101);
  const secondNumber = randomGenerator(2, 101);

  const correctAnswer = isCalc(firstNumber, secondNumber).toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => newGames(generateQuestion, questionToStart);
