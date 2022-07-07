const http = require('http')
// const queryString = require('querystring') 已弃用
const qs = require('querystringify')


module.exports.httpServer = http.createServer(function(request, response) {
    if (request.url.includes('/getList')) {
        console.log('method: ', request.method);
        console.log('url: ', request.url)
        // request.query = queryString.parse(request.url.split('?')[1])
        request.query = qs.parse(request.url.split('?')[1])
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        console.log('request.query: ', JSON.stringify(request.query))
        // response.end('Hello World')
        response.end(JSON.stringify(request.query))
    }
    if (request.method === 'POST') {
        if (request.url.includes('postTest')) {
            const data = []
            request.on('data', chunk => {
                data.push(JSON.parse(chunk))
                console.log('data: ', data)
            })
            request.on('end', () => {
                response.end(JSON.stringify(data))
            })
        }
    }

})

console.log('Server running at http://127.0.0.1:8081')
