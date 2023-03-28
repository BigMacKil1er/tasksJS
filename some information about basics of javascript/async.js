//Асинхронность
const first = () => {
    console.log('First')
}
const second = () => {
    console.log('Second')
}

const third = () => {
    console.log('Third')
}

first()
setTimeout(second, 500)
third()


