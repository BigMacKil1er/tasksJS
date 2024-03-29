// методы

let map = new Map([
    ['Арсен', 28],
    ['Артем', 27],
    ['Ктото', 25]
])

map.set('Лиза', 14)     // Записывает в коллекцию ключ значение
map.get('Арсен')        // Получить значение по ключу
map.has('Артем')    // Чекаем есть ли в колекции данный ключ возвращает true/false
map.delete("Ктото") // удаляет из колекции по ключу, ключ и значение
// map.clear()             // Очищает всю коллекцию

// перебор

for (let mapElement of map.keys()) {
    console.log(mapElement)
}
for (let mapElement of map.values()) {
    console.log(mapElement)
}
for (let mapElement of map.entries()) {
    console.log(mapElement)
}
map.clear() // Очистили
// получаем коллекция мап из обекта

let obj = {
    arsen: 28,
    artem: 27,
    naira: 40
}
let mapFromObj = new Map(Object.entries(obj)) // Object.entries(obj) = преобразует обьект в масив, затем масив передаем в мап
console.log('Из объекта получили -', mapFromObj)


let objFromMap = Object.fromEntries(mapFromObj) // Object.fromEntries(map)  = преобразует мап в объект
console.log("Из мап получили объект -", objFromMap)

/// Задачка про анограмы

function aclear(arr) {
    let map = new Map()
    for (let arrElement of arr) {
        map.set(arrElement.toLowerCase().split('').sort().join(''), arrElement)
    }
    return Array.from(map.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclear(arr))

// задача про массив в который мона будет пушить
let map2 = new Map();

map2.set("name", "John");

let keys = Array.from(map2.keys())  // Arrey.from(map) преобразует мап в массив
keys.push('Igor')
const h = map2.get('name')
console.log(h.forEach())
console.log(keys)