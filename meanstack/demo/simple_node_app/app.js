const http = require('http')
const fs = require('fs')
const dir = './public/'
const port = process.env.PORT | 3000

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        render(res, 'index.html')
    } else if (req.url === '/about') {
        render(res, 'about.html')
    } else if (req.url === '/contact') {
        render(res, 'contact.html')
    } else {
        render(res, 'error.html')
    }

}).listen(port, () => console.log(`http://localhost:${port}`))

const render = (res, file) => {
    fs.readFile(dir + file, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-text': 'text/html'});
            res.end('<H1>404 file not found</H1>')
        }
        res.writeHead(200, {'Content-text': 'text/html'});
        res.end(data)
    })
}