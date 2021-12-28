const os = require('os')
const path = require('path')

// info about the user
const user = os.userInfo()

// method returns the system uptime in second 

console.log(os.uptime()/3600)


console.log(path.sep)