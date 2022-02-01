function saturdayFun(activiy ='roller-skate'){
    return `This Saturday, I want to ${activiy}!`;
}



function mondayWork (activity='go to the office'){
    return `This Monday, I will ${activity}.`;
}



function wrapAdjective(msg,  message='You are '){
    const innerFunction = function (worker = 'a hard worker'){
        return `${message}${msg}${worker}${msg}!`;
    };
    return innerFunction;
}
