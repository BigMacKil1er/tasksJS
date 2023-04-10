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

