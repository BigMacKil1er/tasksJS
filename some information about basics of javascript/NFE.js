// функциям expression можно давать второе внутренее имя которое можно вызвать внутри функции,
// И если внешнее название изменится то все будет работать пример ниже
let seyHi = function func(who) {
    if (who) {
        console.log('Hello', who)
    } else {
        func('Guest')
    }
}
seyHi()
let hiGuest = seyHi()
// seyHi = null
console.log(hiGuest)

// функции это объекты у них есть св-ва name и length(колличество принимаемых аргументов)
console.log(seyHi.name)// func
console.log(seyHi.length) // 1


// =========================================================
// solve a problem
let makeCounter = function () {
    let count = 0
    function counter() {
        return count++
    }

    counter.set = value => count = value
    counter.decrease = () => count--
    return counter
}
let counter = makeCounter()
counter()
counter.set(11)
counter.decrease()
console.log(counter())