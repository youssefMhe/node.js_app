const http = require('http')
const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1> welcome to Node.js </h1>')
    res.end()
})

server.listen(3000, () => console.log('http://localhost:3000'))


const server2 = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1> welcome to Node.js server 2 </h1>')
    res.end()
})

server2.listen(3000, () => console.log('http://localhost:4000'))