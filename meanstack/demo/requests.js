const http = require('http')

const data = JSON.stringify({
    title : ' DATA LEARNING '
})
const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
        'Content-Length': data.length
    }
}
const request = http.request(options, res => {
    res.on('data', chunk => {
        process.stdout.write(chunk)
    })
})

request.on('error', err => {
    console.error(err)
})

request.end()