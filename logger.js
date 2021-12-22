const os = require('os');
var url= 'http://mylogger.io/log';

function log(message)
{
    // send http request
    console.log(message);
}

module.exports.log = log;


function memoryPrint()
{
    // send http request
    var totalMemory = os.totalmem();
    var freeMemory = os.freemem();
    console.log(`Memory free :${freeMemory}`);
    console.log(`Memory total :${totalMemory}`);
    
}

module.exports.memoryPrint = memoryPrint;