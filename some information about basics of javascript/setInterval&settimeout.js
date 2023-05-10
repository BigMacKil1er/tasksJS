// solve a problem

// let timer = setTimeout(function printNumbers(from, to) {
//     console.log(from)
//     from++
//     if (from === to+1) {
//         clearTimeout(timer)
//     } else setTimeout(printNumbers,0,from,to)
// }, 0,1, 10)
//
// function countNumbers(from, to) {
//     let current = from
//     let interval = setInterval(function(){
//         if (current < to+1){
//             console.log(current)
//             current++
//         } else clearInterval(interval)
//     })
// }
// countNumbers(1,10)

let i = 0;

setTimeout(() => console.log(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
    i++;
}