const net = require('node:net')

const findValidPort = (desiredPort) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
        const { port } = server.address()
        server.close(() => {
            resolve(port)
        })

        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                findValidPort(0).then(port => resolve(port))
            } else {
                rejects(port)
            }
        })
    })

}

module.exports = {
    findValidPort
}
