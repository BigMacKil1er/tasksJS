// decorator
// декоратор это функция принимающая другую функцию и изменяет ее поведение
function slow(x) {
    console.log(`Called with ${x}`)
    return x
}

function cacheDecorator(func) {
    let cache = new Map()

    return function (x){
        if (cache.has(x)){
            return cache.get(x)
        }
        let result = func.call(this, x)

        cache.set(x, result)
        return result
    }
}

slow = cacheDecorator(slow)

console.log(slow(5))
console.log(slow(5))

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