import readlineSync from 'readline-sync';

const calcularProgression = () => {
    const longitud = 10;
    const inicio = Math.floor(Math.random() * 20) + 1;
    const paso = Math.floor(Math.random() * 5) + 1;

    const progresion = [];
    for (let i = 0; i < longitud; i++) {
        progresion.push(inicio + i * paso);
    }

    const indiceOculto = Math.floor(Math.random() * longitud);
    const resultadoReal = progresion[indiceOculto];

    const progresionOculta = [...progresion];
    progresionOculta[indiceOculto] = '..';

    console.log('¿Qué número falta en la progresión?');
    console.log(`Pregunta: ${progresionOculta.join(' ')}`);
    const respuestaUsuario = readlineSync.question('Tu respuesta: ');
    const respuesta = parseInt(respuestaUsuario, 10);

    if (respuesta === resultadoReal) {
        console.log('¡Correcto!');
        return true;
    } else {
        console.log(`'${respuesta}' es una respuesta incorrecta ;(. La respuesta correcta era '${resultadoReal}'.`);
        return false;
    }
};

export default calcularProgression;
