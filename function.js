// we have a function declaration that look like:
//мы имеем объявленую функцию, которое выглядит как:

function sayName1(name) {
    console.log('Your name', name, '/is used by a function declaration')
}

sayName1('Tom')

//we have a function expression that look like
//мы имеем функциональное выражение которое имеет вид

const sayName2 = function (name) {
    console.log('Your name', name, '/is used by a function expression')
}

sayName2('Tom')

// and we have an arrow function
//стрелочные функции

let sayName3 = (name) => {
    console.log('Your name', name, '/is used by an arrow function')}

sayName3('Tom')

let doSomeThing = (a) => a ** 2
console.log(doSomeThing(5))