#!/usr/bin/env node
import readlineSync from 'readline-sync';
import generarOperacion from '../src/games/cal.js';

console.log('¡Bienvenido a Brain Games!');
const userName = readlineSync.question('¿Cuál es tu nombre? ');
console.log(`¡Hola, ${userName}!`);

const rondas = 3;
for (let i = 0; i < rondas; i += 1) {
    const correcta = generarOperacion();
    if (!correcta) {
        console.log(`¡Intentémoslo de nuevo, ${userName}!`);
        process.exit(1);
    }
}

console.log(`¡Felicidades, ${userName}! Has completado el juego.`);
console.log('¡Hasta la próxima!');
