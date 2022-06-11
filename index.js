// code your solution here
function saturdayFun(myActivity) {
    if (myActivity === undefined) {
        return ("This Saturday, I want to roller-skate!");
    } else {
        return (`This Saturday, I want to ${myActivity}!`);
    }
               
}


function mondayWork(myActivity) {
    if (myActivity === undefined){
    return "This Monday, I will go to the office.";
  } else {
    return (`This Monday, I will ${myActivity}.`);
  }
}


function wrapAdjective(visualFlair = "*") {

  return function (params = "special") {
    return `You are ${visualFlair}${params}${visualFlair}!`
  } 
   
}
