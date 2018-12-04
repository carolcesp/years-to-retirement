'use strict';

// Hago referencia a todos los elementos en constantes en mi js
const input = document.querySelector('.user_age');
const button = document.querySelector('.btn');
const elementP = document.querySelector('.result');

// Al hacer click llamo a una función que:
// 1. recoge la edad del usuario del campo
// 2. le resta 67
// 3. escribe en el P “te queda XX años para jubilarte”

function userAge(){
  const user = parseInt(input.value);
  const age = 67 - user;
  elementP.innerHTML =(`Te faltan ${age} para jubilarte`);
}

//Añado un listener de click a mi botón
button.addEventListener('click',userAge);

