// code your solution here
function saturdayFun(activity ="roller-skate"){
return (`This Saturday, I want to ${activity}!`)

}
function mondayWork(activity="go to the office"){
    return (`This Monday, I will ${activity}.`)

}
let wrapAdjective = function(wrap="*"){
return function (word ='special'){
    return `You are ${wrap}${word}${wrap}!`
}

}