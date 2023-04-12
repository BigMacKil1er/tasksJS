// оОбъекты мы можем перебрать с помощью Object.keys, values, entries.js
// по сути она превращает объект в массив


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
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


console.log(sumSalaries(salaries))
