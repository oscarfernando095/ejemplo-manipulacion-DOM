const h1 = document.querySelector('h1');
const p = document.querySelector('p');
console.log('Hola Puesss');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');
const result = document.querySelector('#resultado');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const boton = document.querySelector('#btnCalcular');
const forma = document.querySelector('#forma')

//boton.addEventListener('click', bot);
forma.addEventListener('submit', bot)

function bot(event) {
   event.preventDefault()
   const suma = ((Number(input.value)) + Number((input2.value)));
   result.innerHTML = suma;
}