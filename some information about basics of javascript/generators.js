function* generateSomething() {
    yield 1
    yield 2
    yield 3
}

let gen = generateSomething()
console.log(gen.next())
console.log(gen.next())

function* generateSeq(start, stop) {
    for (let i = start; i < stop; i++){
        yield i
    }
}

function* generatePass() {
    yield* generateSeq(48,57)
    yield* generateSeq(65,90)
    yield* generateSeq(97,122)
}
let str = ''
for (let code of generatePass()){
    str += String.fromCharCode(code)
}
console.log(str)

function* gena() {
    let one = yield 1
    console.log(one)
    let two = yield '2'
    console.log(two)
    let three = yield '1' + 2
    console.log(three)
}

let generator = gena()
console.log(generator.next().value)
console.log(generator.next('one').value)
console.log(generator.next('two').value)

function* pseudoGenerator(previus) {
    let next = previus * 16807 % 2147483647
    yield next
    yield* pseudoGenerator(next)
}
let random = pseudoGenerator(1)

console.log(random.next().value)
console.log(random.next().value)
console.log(random.next().value)
console.log(random.next().value)
console.log(random.next().value)
console.log(random.next().value)