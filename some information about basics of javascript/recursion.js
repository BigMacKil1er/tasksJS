//Hi, I solved the problem by using recursion

function sum(num) {
    return num === 1 ? num : sum(num -1) + num
}

console.log(sum(5))

function factorial(num) {
    num = num < 0 ? -num : num
    return num === 1 ? num : factorial(num -1) * num
}

console.log(factorial(5))
function fibonachi(num) {
    return num <= 1 ? num : fibonachi(num - 1) + fibonachi(num - 2)
}

console.log(fibonachi(77))
