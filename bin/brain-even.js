#!/usr/bin/env node
import readlineSync from 'readline-sync';
import runGame from '../src/games/even.js';

console.log('¡Bienvenido a Brain Games!');
const userName = readlineSync.question('¿Cuál es tu nombre? ');
console.log(`¡Hola, ${userName}!`);

console.log('Responde "yes" si el número es par, de lo contrario responde "no".');


let correctAnswersInARow = 0;

while (correctAnswersInARow < 3) {
    const { randomNumber, correctAnswer } = runGame();


    console.log(`Pregunta: ¿Es ${randomNumber} par?`);


    const userAnswer = readlineSync.question('Tu respuesta: ').toLowerCase();


    if (userAnswer === correctAnswer) {
        console.log('¡Correcto!');
        correctAnswersInARow++;
    } else {
        console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
        console.log('¡Intentémoslo de nuevo, ' + userName + '!');
        correctAnswersInARow = 0;
    }
}

console.log(`🏆 ¡Felicidades, ${userName}! Has respondido correctamente 3 veces seguidas.`);
