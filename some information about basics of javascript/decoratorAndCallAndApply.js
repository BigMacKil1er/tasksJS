// decorator
// декоратор это функция принимающая другую функцию и изменяет ее поведение
function slow(x,y) {
    console.log(`Called with ${x} and ${y}`)
    return x + y
}

function cacheDecorator(func) {
    let cache = new Map()
    let key = hash(arguments)
    return function (key){
        if (cache.has(key)){
            return cache.get(key)
        }
        let result = func.call(this, ...arguments)

        cache.set(key, result)
        return result
    }
}
function hash() {
    return [].join.call(arguments)
}

slow = cacheDecorator(slow)

console.log(slow(5, 5))
console.log(slow(5, 2))

// По сути call явно устанавливает контекст this если мы вызываем функцию внутри объекта и еоторая ссылается на элемент ынутри объекта
const obj = {
    someMethod(){
        return 1
    },
    someFunction(x){
        console.log('Called with call ' + x)
        return x * this.someMethod()
    }
}
obj.someFunction = cacheDecorator(obj.someFunction)
console.log(obj.someFunction(5))
console.log(obj.someFunction(5))

// obout apply
// делает тоже самое что и call но может обработать сразу много аргументов

function copyDecorator(func) {
    let cache = new Map()

    return function (x){
        if (cache.has(x)){
            return cache.get(x)
        }
        let result = func.apply(this, arguments)

        cache.set(x, result)
        return result
    }
}
function fast(x, y, z) {
    console.log(x*y*z)
}

fast = copyDecorator(fast)

fast(2, 5, 5)
console.log('this sheet')

//the problems

function spy(func) {
    function wrapper(...args){
        wrapper.calls.push(args)
        return func.apply(this, args)
    }
    wrapper.calls = []
    return wrapper


}
function work(a, b) {
    console.log( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9
work(5, 6);// 11
for (let args of work.calls) {
    console.log( 'call: ' + args.join() ); // "call:1,2", "call:4,5"
}

// next problem
function delay(func, delay) {
    return function (){
        setTimeout(()=> func.apply(this, arguments), delay)
    }
}
function f(x) {
    console.log(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 м

// next problem
function debounce(f, ms){
    let time = false
    return function () {
        if (time) return
        f.apply(this, arguments)
        time = true
        setTimeout(()=> time = false, ms)
    }
}
let fu = debounce(console.log, 1000);

fu(1); // выполняется немедленно
fu(2); // проигнорирован

setTimeout( () => fu(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => fu(4), 1100); // выполняется
setTimeout( () => fu(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)