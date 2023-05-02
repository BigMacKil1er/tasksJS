// оОбъекты мы можем перебрать с помощью Object.keys, values, entries.js
// по сути она превращает объект в массив

// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
//
//     Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
//
//     Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    "JOHN": 100,
    "JTTN": 100,
    "JOGN": 100,
    "PETE": 300,
    "MARY": 250
};

// for (let salary of Object.entries(salaries)) {
//     console.log(salary)
// }

function sumSalaries(obj) {
    let sum = 0
    for (let value of Object.values(obj)) {
        sum += value
    }
    return sum
}

let t = 'Jt'
function sumSa(obj) {
    let sum = []
    let fil = Object.keys(obj).filter(item => item.indexOf(t.toUpperCase()) !== -1)
    // for (let value of Object.keys(obj)) {
    //     sum.push(value)+
    // }
    // return sum
    return fil
}
console.log(sumSa(salaries))
console.log(sumSalaries(salaries))

// Напишите функцию count(obj), которая возвращает количество свойств объекта:


function count(obj) {
    return Object.entries(obj).length
}
let user = {
    name: 'John',
    age: 30,
    legs: 2
};

console.log(count(user))

console.log('string'.toUpperCase())