import readlineSync from 'readline-sync';

const rounds = 3;
const newGames = (generateGame, questionToStart) => {
  console.log('Welcome to the Brain Even!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(questionToStart);

  for (let i = 0; i < rounds; i += 1) {
    const { question, correctAnswer } = generateGame();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} these is wrong answer ;(. Correct answer is ${correctAnswer}. Lets try again ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name} you won!`);
};

export default newGames;
