// function checkSpam(string) {
//     let ban1 = 'viagra'
//     let ban2 = 'хуй'
//     let ban3 = 'xxx'
//     if (string.toLowerCase().includes(ban1) || string.toLowerCase().includes(ban2) || string.toLowerCase().includes(ban3)) {
//         return true
//     } else return false
// }
//
// console.log(checkSpam('buy ViAgRA now'))
// console.log(checkSpam('free xxxxx'))
// console.log(checkSpam('innocent rabbit'))
// console.log(checkSpam('Иди ка ты на хуй'))

function extractCurrencyValue(str) {
    let string = ''
    for (let i = 0; i < str.length; i++) {
        if (+str[i]) {
            string += str[i]
        } else if (+str[i] === 0){
            string += str[i]
        }
    }
    return string
}

console.log(extractCurrencyValue('$gvdg12320fxgh'))
