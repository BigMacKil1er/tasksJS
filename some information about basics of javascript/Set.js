// про такую штуку как set
let ar = [1, 2, 3, 4]

let set = new Set(ar)// Создает новыю уникальную колекцию без ключей

set.add(5)           // Добавляет в коллекцию значение если оно уже есть ни чего не делает
set.delete(4)  // удаляет значение если оно есть и возвращает true, если значения нет возвращ false
set.has(3)     // проверяет есть ли значение в коллекции если да то возвр true
set.size             // колличество уникальных значений
set.forEach((value, value2, set)=>{ // три параметра принимает ф-ция "значение" "значение2"тожесамое что и первое и саму колекцию
    console.log(value) // значение
    console.log(value2)// тоже самое значение
    console.log(set)   // коллекция
})

for (let number of set.keys()) {
    console.log(number) // 1,2,3,5
}
for (let number of set.values()) {
    console.log(number) // 1,2,3,5
}
for (let number of set.entries()) {
    console.log(number) // [ 1, 1 ][ 2, 2 ][ 3, 3 ][ 5, 5 ]
}

//Работает так потому что работает так же как мап и могут быть взаимо заменены
set.clear()