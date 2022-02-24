import readlineSync from 'readline-sync';
import randomGenerator from './randomizer';

const rounds = 3;
const isEven = (num) => num % 2 === 0;

const generateCorrectAnswer = () => {
  const number = randomGenerator(2, 11);

  const question = number.toString();

  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

const greeting = () => {
  console.log('Welcome to the Brain Even!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < rounds; i += 1) {
    const { question, correctAnswer } = generateCorrectAnswer();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(
        `${userAnswer} these is wrong answer. Correct answer is ${correctAnswer}. Lets try again ${name}!`,
      );
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name} you won!`);
};

export default greeting;
