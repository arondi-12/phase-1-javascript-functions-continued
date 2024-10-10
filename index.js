function saturdayFun(acivity = 'roller-skate'){
    return `This Saturday, I want to ${acivity}!`;
}
saturdayFun();

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(){
    const innerFunction = function (input = 'special'){
        return `You are ${input}!`;
    }
}

function wrapAdjective(wrapper = '*') {
    // Return a new function that takes an adjective and returns the complete phrase
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
  
  