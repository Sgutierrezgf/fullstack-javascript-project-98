import readlineSync from 'readline-sync';

const generarOperacion = () => {
    const operadores = ['+', '-', '*'];
    const num1 = Math.floor(Math.random() * 30) + 1;
    const num2 = Math.floor(Math.random() * 30) + 1;
    const operador = operadores[Math.floor(Math.random() * operadores.length)];

    let resultadoReal;

    switch (operador) {
        case '+':
            resultadoReal = num1 + num2;
            break;
        case '-':
            resultadoReal = num1 - num2;
            break;
        case '*':
            resultadoReal = num1 * num2;
            break;
        default:
            return false;
    }

    console.log('¿Cuál es el resultado de la expresión?');
    console.log(`Pregunta: ${num1} ${operador} ${num2}`);
    const respuestaUsuario = readlineSync.question('Tu respuesta: ');
    const respuesta = parseInt(respuestaUsuario, 10);

    if (respuesta === resultadoReal) {
        console.log('¡Correcto!');
        return true;
    }

    console.log(`'${respuesta}' es incorrecto ;(. La respuesta correcta era '${resultadoReal}'.`);
    return false;
};

export default generarOperacion;
