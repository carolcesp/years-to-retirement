'use strict';

// Hago referencia a todos los elementos en constantes en mi js
const input = document.querySelector('.user_age');
const button = document.querySelector('.btn');
const elementP = document.querySelector('.result');

// Al hacer click llamo a una función que:
// 1. recoge la edad del usuario del campo
// 2. le resta 67

function userAge(){
  const user = parseInt(input.value);
  const age = 67 ;

  if(user===age){
    elementP.innerHTML =(`¡Por fin! Te jubilas este año ☺️`);
  }
  else if(user<age){
    elementP.innerHTML =(`Te faltan ${age-user} años para jubilarte, animo!🤗 `);
  }
  else{
    elementP.innerHTML =(`Ya estás jubilado 😉`);
  }
}

//Añado un listener de click a mi botón
button.addEventListener('click',userAge);

