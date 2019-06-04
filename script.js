/* eslint-disable quotes */
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

function daysInMonth(month,leapYear) {
  let sentence;
  switch(month) {
  case "January":
    sentence = "January has 31 days.";
    break;
  case "February":
    if (leapYear) {
      sentence = "February has 29 days.";
    }
    else {
      sentence = "February has 28 days.";
    }
    break;
  case 'March':
    sentence = 'March has 31 days.';
    break;
  case 'April':
    sentence = 'April has 30 days.';
    break;
  case 'May':
    sentence = 'May has 31 days.';
    break;
  case 'June':
    sentence = 'June has 30 days.';
    break;
  case 'July':
    sentence = 'July has 31 days.';
    break;
  case 'August':
    sentence = 'August has 31 days.';
    break;
  case 'September':
    sentence = 'September has 30 days.';
    break;
  case "October":
    sentence = "October has 31 days.";
    break;
  case "November":
    sentence = "November has 30 days.";
    break;
  case "December":
    sentence = "December has 31 days.";
    break;    
  }
  return sentence;
}

daysInMonth("October");


function RPSGame(Choice) {
  const randomNo = Math.floor(Math.random() * 3) + 1;
  
  if(Choice === 1 && randomNo === 3) {
    return 'Player Wins';
  } else if (Choice === 1 && randomNo === 2) {
    return 'Player loses';
  } else if (Choice === 1 && randomNo === 1){
    return 'Tie';
  } else if (Choice === 2 && randomNo === 1) {
    return 'Computer Wins';
  } else if (Choice === 2 && randomNo === 2) {         return 'Tie';
  } else if (Choice === 2 && randomNo === 3) {
    return 'Computer Wins';
  } else if (Choice === 3 && randomNo === 1) {
    return 'Player Wins';
  } else if (Choice === 3 && randomNo === 2) {
    return 'Player Wins';
  } else if (Choice === 3 && randomNo === 3) {
    return 'Tie';
  }
}

console.log(RPSGame(2));