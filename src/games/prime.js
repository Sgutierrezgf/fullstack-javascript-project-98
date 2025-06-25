import readlineSync from 'readline-sync';

const esPrimo = (n) => {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};

const calcularEsPrimo = () => {
    const numero = Math.floor(Math.random() * 100) + 1;
    const respuestaCorrecta = esPrimo(numero) ? 'yes' : 'no';

    console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');
    console.log(`Pregunta: ${numero}`);

    const respuestaUsuario = readlineSync.question('Tu respuesta: ').toLowerCase();

    if (respuestaUsuario === respuestaCorrecta) {
        console.log('¡Correcto!');
        return true;
    }

    console.log(`'${respuestaUsuario}' es una respuesta incorrecta ;(. La respuesta correcta era '${respuestaCorrecta}'.`);
    return false;
};

export default calcularEsPrimo;
