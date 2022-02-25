import newGames from '../index.js';
import randomGenerator from '../randomizer.js';

const questionToStart = 'What number is missing in the progression?';

const isProgression = (num1) => {
  const numArray = [];
  const interval = randomGenerator(2, 5);
  const massiveLength = randomGenerator(6, 10);
  let temp = 0;
  for (let i = 0; i <= massiveLength; i++) {
    temp += interval;
    numArray.push(temp);
  }
  return numArray;
};

const generateQuestion = () => {
  const progression = numArray;

  const indexOfMissingNumber = randomGenerator(0, massiveLength);

  const correctAnswer = progression[indexOfMissingNumber].toString();

  progression[indexOfMissingNumber] = '..';

  return {
    question: progression.join(', '),
    correctAnswer,
  };
};

export default () => newGames(generateQuestion, questionToStart);
