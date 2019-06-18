var externalip = require('externalip');

externalip(function (err, ip) {
    console.log(ip); // => 8.8.8.8
});

// en0 192.168.1.101
// eth0 10.0.0.101
