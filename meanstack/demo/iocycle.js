let total = 0
let fs = require('fs')
let n = 1

// I/O cycle

fs.readFile('./index.js', () => {
    setTimeout(print1, 0)
    setImmediate(print2)
})


function print1() {
    total = n * 10
    console.log('total 1 is :', total)
    n++
}

function print2() {
    total = n * 10
    console.log('total 2 is :', total)

}

