#!/usr/bin/env node
import readlineSync from 'readline-sync';
import calcularProgression from '../src/games/progression.js';

console.log('¡Bienvenido a Brain Games!');
const nombre = readlineSync.question('¿Cuál es tu nombre? ');
console.log(`¡Hola, ${nombre}!\n`);

const rondas = 3;
for (let i = 0; i < rondas; i++) {
    const esCorrecto = calcularProgression();
    if (!esCorrecto) {
        console.log(`¡Intentémoslo de nuevo, ${nombre}!`);
        process.exit(0);
    }
}

console.log(`¡Felicidades, ${nombre}!`);
