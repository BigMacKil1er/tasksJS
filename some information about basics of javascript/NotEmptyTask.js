async function empty() {

}

let mt = empty()
console.log(mt)


let obj = {
    Object: 'Object'
}

console.log(obj.Object)

class MyArrey extends Array{
    IsEmpty(){
        return this.length === 0
    }
}

let castom = new MyArrey(1, 3, 4, 5, 6)
console.log(castom.IsEmpty())
console.log(castom.length)
console.log(castom.filter(item => item % 2 === 0))