import newGames from '../index.js';
import randomGenerator from '../randomizer.js';

const isEven = (num) => num % 2 === 0;

const questionToStart = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => {
  const number = randomGenerator(2, 11);

  const question = number.toString();

  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

export default () => newGames(generateQuestion, questionToStart);
