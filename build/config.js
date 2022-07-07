const path = require('path')
const spawn = require('child_process').fork
const server = require('../server/index')

server.httpServer.listen(8081)
console.log(process.argv)
const crossEnv = path.resolve(
    process.cwd(),
    'node_modules/cross-env/src/bin/cross-env-shell.js'
)

const PROJECT_NAME = process.argv[2]

spawn(crossEnv, [`PROJECT_NAME=${PROJECT_NAME}`, 'ENV=vite', 'vite'], {
    stdio: 'inherit',
})
