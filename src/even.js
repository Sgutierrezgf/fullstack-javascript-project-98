const getRandom = () => Math.floor(Math.random() * 100) + 1;
const isEven = (num) => num % 2 === 0;

const runGame = () => {
    const randomNumber = getRandom();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    return { randomNumber, correctAnswer };
};

export default runGame;