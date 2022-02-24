import newGames from '../index.js';
import randomGenerator from '../randomizer.js';

const isCalc = (
  mathOperation,
  numOne,
  numTwo,
) => {
  switch (mathOperation) {
    case '*':
      return numOne * numTwo;
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    default:
      throw new Error(`Unknown operation: '${mathOperation}'!`);
  }
};
const questionToStart = 'What is the result of the expression?';
const mathOperations = ['*', '+', '-'];
const generateQuestion = () => {
  const firstNumber = randomGenerator(2, 101);
  const secondNumber = randomGenerator(2, 10);

  const randMathOperation = mathOperations[randomGenerator(0, mathOperations.length)];

  const question = `${firstNumber} ${randMathOperation} ${secondNumber}`;

  const correctAnswer = isCalc(
    randMathOperation,
    firstNumber,
    secondNumber,
  ).toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => newGames(generateQuestion, questionToStart);
