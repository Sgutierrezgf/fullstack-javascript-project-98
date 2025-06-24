import readlineSync from 'readline-sync';



const calcularMCD = () => {
    const num1 = Math.floor(Math.random() * 30) + 1;
    const num2 = Math.floor(Math.random() * 30) + 1;

    let a = num1;
    let b = num2;
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    const resultadoReal = a;
    console.log('Encuentra el máximo común divisor de los números dados.');
    console.log(`Pregunta: ${num1} ${num2}`);
    const respuestaUsuario = readlineSync.question('Tu respuesta: ');
    const respuesta = parseInt(respuestaUsuario, 10);

    if (respuesta === resultadoReal) {
        console.log('¡Correcto!');
        return true;
    } else {
        console.log(`'${respuesta}' es incorrecto ;(. La respuesta correcta era '${resultadoReal}'.`);
        return false;
    }

}



export default calcularMCD;