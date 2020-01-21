const os = require('os');

console.log('CPU info: ', os.cpus());
console.log('IP address: ', os.networkInterfaces().enp3s0.map(i => i.address));
console.log('Free memory: ', os.freemem());
console.log('Type: ', os.type());
console.log('OS Version: ', os.release());
console.log('User info: ', os.userInfo());
