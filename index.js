function saturdayFun (activity= 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective (special, msg = 'You are '){
    const inner = function (hardWorker='a hard worker') {
        return `${msg}${special}${hardWorker}${special}!`;
    };
    return inner;
}








// // function wrapAdjective(msg,  message='You are '){
// //     const innerFunction = function (worker = 'a hard worker'){
// //         return `${message}${msg}${worker}${msg}!`;
// //     };
// //     return innerFunction;
// // }
