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

function decode(str) {
  if(str.charAt(0) === 'a') {
    return str.charAt(1);
  } else if(str.charAt(0) === 'b') {
    return str.charAt(2);
  } else if(str.charAt(0) === 'c') {
    return str.charAt(3);
  } else if(str.charAt(0) === 'd') {
    return str.charAt(4);
  } else {
    return ' ';
  }
}

console.log(decode('craft'));

