'use strict';

function jediName(firstName, lastName){
  return `${lastName.slice(0,3)}${firstName.slice(0,2)}`;
}

console.log(jediName('john', 'denver'));

function beyond(num) {
  if (num === 0) {
    console.log("Staying home.");
  }

  else if ((num < 0) && (num !== Infinity)) {
    console.log("To negative infinity.");
  }

  else if ((num > 0) && (num !== Infinity)) {
    console.log("To infinity.");
  }

  else {
    console.log("And beyond.");
  }
}

beyond(10);