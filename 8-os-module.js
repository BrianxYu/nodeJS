const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// methods for system up time in second
console.log(`The system Uptime is ${os.uptime() / 60 / 60} hours`);

// 
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMem: os.freemem()
};

console.log(currentOs);