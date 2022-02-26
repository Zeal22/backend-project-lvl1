import newGames from '../index.js';
import randomGenerator from '../randomizer.js';

const questionToStart = 'What number is missing in the progression?';

const massiveLength = 10;

const isProgression = () => {
  const numArray = [];
  const interval = randomGenerator(2, 5);
  let temp = 0;
  for (let i = 0; i <= massiveLength; i += 1) {
    temp += interval;
    numArray.push(temp);
  }
  return numArray;
};

const generateQuestion = () => {
  const numArray = isProgression(randomGenerator(5, 10));

  const missingNumber = randomGenerator(0, massiveLength);

  const correctAnswer = numArray[missingNumber].toString();

  numArray[missingNumber] = '..';

  const questionStr = numArray.join(', ');

  return {
    question: questionStr,
    correctAnswer,
  };
};

export default () => newGames(generateQuestion, questionToStart);