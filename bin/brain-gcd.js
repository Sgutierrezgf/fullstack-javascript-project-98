import readlineSync from 'readline-sync';
import calcularMCD from '../src/games/gdc.js';

console.log('¡Bienvenido a Brain Games!');
const userName = readlineSync.question('¿Cuál es tu nombre? ');
console.log(`¡Hola, ${userName}!`);


const rondas = 3;
for (let i = 0; i < rondas; i++) {
    const correcta = calcularMCD();
    if (!correcta) {
        console.log(`Intentémoslo de nuevo, ${userName}.`);
    }
}
console.log(`¡Felicidades, ${userName}! Has completado el juego.`);
console.log('¡Hasta la próxima!'); 