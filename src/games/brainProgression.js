import newGames from '../index.js';
import randomGenerator from '../randomizer.js';

const questionToStart = 'What number is missing in the progression?';

const massiveLength = 10;

const isProgression = (
  numberToStartProgression,
  stepInProgression,
) => {
  const progression = [];
  for (
    let i = numberToStartProgression;
    progression.length < massiveLength;
    i += stepInProgression
  ) {
    progression.push(i);
  }
  return progression;
};

const generateQuestion = () => {
  const progression = isProgression(
    randomGenerator(2, 11),
    randomGenerator(2, 11),
    massiveLength,
  );

  const missingNumber = randomGenerator(0, massiveLength);

  const correctAnswer = progression[missingNumber].toString();

  progression[missingNumber] = '..';

  const questionStr = progression.join(', ');

  return {
    question: questionStr,
    correctAnswer,
  };
};

export default () => newGames(generateQuestion, questionToStart);
