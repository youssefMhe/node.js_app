const http = require('http')
const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'})

    if(res.method==='GET'){

        res.end('GET')
    }
    if(res.method==='POST'){

        res.end('POST')
    }
    if(res.method==='PUT'){

        res.end('PUT')
    }
    if(res.method==='DELETE'){

        res.end('DELETE')
    }
}).listen(3000, () => console.log('http://localhost:3000'))

