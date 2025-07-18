#!/usr/bin/env node
import readlineSync from 'readline-sync';
import calcularEsPrimo from '../src/games/prime.js';

console.log('¡Bienvenido a Brain Games!');
const nombre = readlineSync.question('¿Cuál es tu nombre? ');
console.log(`¡Hola, ${nombre}!\n`);

const rondas = 3;
for (let i = 0; i < rondas; i += 1) {
  const correcto = calcularEsPrimo();
  if (!correcto) {
    console.log(`¡Intentémoslo de nuevo, ${nombre}!`);
    process.exit(1);
  }
}

console.log(`¡Felicidades, ${nombre}!`);
