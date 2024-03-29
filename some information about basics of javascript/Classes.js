// I rewrote function. Now it is Class
class Clock{
    constructor({ template }){
        this.template = template
    }
    render(){
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);

        console.log(output);
    }
    stop(){
        clearInterval(this.timer)
    }
    start(){
        this.render()
        this.timer = setInterval(()=> this.render(), 1000)
    }
}

let clock = new Clock({template: 'h:m:s'})
clock.start()


setTimeout(() => clock.stop(), 5000)

class Animal {
    constructor(name) {
        this.speed = 0
        this.name = name
    }

    run(speed){
        this.speed = speed
        console.log(`${this.name} бежит со скоростью ${this.speed}`)
    }

    stop(){
        this.speed = 0
        console.log(`${this.name} стоит как в копаный!`)
    }
}

let tiger = new Animal('Мочеглот')

tiger.run(40)

setTimeout(()=> tiger.stop(), 5000)

class Rabbit extends Animal{
    hide(){
        console.log(`${this.name} прячется от Мочеглота`)
    }
    stop(){
        super.stop()
        this.hide()
    }
}

let pavlusha = new Rabbit('Павлуша')

pavlusha.run(10)
// pavlusha.hide()

setTimeout(()=> pavlusha.stop(), 4000)

class Fish extends Animal{
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength
    }
}

let karasi = new Fish('Карась', 10)
karasi.run(1)
console.log(karasi.earLength)

class Car {
    brand = 'bmw'
    constructor() {
        console.log(this.brand)
    }
    showBrand(){
        console.log('Bmw')
    }
}

class Mers extends Car{
    brand = 'mers'
    showBrand() {
        console.log('Mercedes');
    }
}

let mers = new Mers()  // bmw
let bmw = new Car()    // bmw
console.log('--------------------')
mers.showBrand()
bmw.showBrand()

class ExtendedClock extends Clock{
    constructor(options) {
        super(options);
        let { precision = 1000 } = options
        this.precision = precision
    }
    start() {
        this.render()
        this.timer = setInterval(()=> this.render(), this.precision)
    }
}

let ticTac = new ExtendedClock({template: 'h:m:s'})

ticTac.start()

setTimeout(() => ticTac.stop(), 10000)

class Some extends Object{
    constructor(name) {
        super();
        this.name = name
    }
}

let some = new Some('FuckMe')

console.log(some.name)

class TemperatureBody{
    _temp = 32

    set temp(value){
        if (value < 32) throw new Error('Температура неможет быть меньше, если вы живы')
        this._temp = value
    }
    get temp(){
        return this._temp
    }
}

let human = new TemperatureBody()
human.temp = 33
console.log(human.temp)

// another exemple
// договоренность програмистов))

class PiaceOfShit {
    constructor(name) {
        this._name = name
    }

    get name(){
        return this._name
    }
}

let sergey = new PiaceOfShit('Серега')
sergey.name = 'Артем'
console.log(`Имя куска дерьма: ${sergey.name}`)

// new syntax

class TankCapacity{
    #tankMax = 60
    #tankNow = 0
    constructor(brand) {
        this.brand = brand
    }
    setTank(value){
        if (value < 0) throw new Error('Ошибка не может быть отрицательного уровня топлива')
        if (value > this.#tankMax) throw new Error('Ошибка! Слишком много топлива!')
        this.#tankNow = value
    }
    getTank(){
        return `Уровень топлива: ${this.#tankNow}`
    }

}

let chevy = new TankCapacity('Шевролет')
chevy.setTank(50)
console.log(chevy.getTank())
console.log('========================+')