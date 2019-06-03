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
    case "March":
      sentence = "March has 31 days.";
      break;
    case "April":
      sentence = "April has 30 days.";
      break;
    case "May":
      sentence = "May has 31 days.";
      break;
    case "June":
      sentence = "June has 30 days.";
      break;
    case "July":
      sentence = "July has 31 days.";
      break;
    case "August":
      sentence = "August has 31 days.";
      break;
    case "September":
      sentence = "September has 30 days.";
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
