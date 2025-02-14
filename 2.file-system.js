const fs = require('node:fs')
// const {promisify}  = require('node:util')

const stat = fs.statSync('./file.txt')

// console.log(stat.isFile());

const text = fs.readFileSync('./file.txt', 'utf-8')

text2 = fs.readFile('./file.txt', 'utf-8', (err, text) => { //callbacks
    // console.log(text);
})

// promesas
const fs1 = require('node:fs/promises')


fs1.readFile('./file.txt', 'utf-8')
    .then(text => {
        console.log(text);

    })




