const os = require('os');

//information about the current user
const user = os.userInfo()

console.log(user)

console.log(`PC uptime is ${os.uptime()} seconds`)
// PC uptime information


const  currentOs = {
    type: os.type(),
    totalmemory: os.totalmem(),
    freeMemory: os.freemem(),
    release: os.release(),
}


console.log(currentOs)
