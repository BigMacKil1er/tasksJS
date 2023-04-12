// первое отличие weakmap щт map Это то что ключами должны быть объекты

let weakM = new WeakMap()
let obj = {}

weakM.set(obj, 'true')
let john = { name: 'John' }
weakM.set(john, 'Snow')

console.log(weakM.has(john))
john = null
console.log(weakM.has(john))
// имеет такие методы. Если объект удален сборщиком мусора то он автоматом удаляется из викмап
// weakM.set()
// weakM.get()
// weakM.delete()
// weakM.has()
// но не известно в какой момент это происходит, поэтому для викмап недоступен перебор циклами
// по суть мап будет еще хранить информацию если объект покинет нас


// задача
// Хранение отметок "не прочитано"
// ----
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let newWeakSet = new WeakSet()
function rec(obj) {
    newWeakSet.add(obj)
}

function checkMessage(arr) {
    for (let arrElement of arr) {
        rec(arrElement)
    }
}
messages.push({text: 'What\'s up?', from: 'Kent'})
checkMessage(messages)

console.log(newWeakSet.has(messages[3]))