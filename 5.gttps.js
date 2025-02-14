const http = require('node:http')
const { findValidPort } = require('./6.net')


const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Hello World')

})

findValidPort(3000).then(port => {
    server.listen(0, () => {
        console.log(`server listening on port http://localhost:${port}`);
    })
})


// server.listen(0, () => {
//     console.log(`server listening on port http://localhost:${server.address().port}`);

// })