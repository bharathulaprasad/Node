
const Logger = require('./loggeremitter');


const logger= new Logger();
logger.on('messageLogged',(arg)=>{
    console.log('Listener called', arg);
})

//Emit means something like noise, and raise an alarm.
logger.log('messageLogged',{id:1, url: 'http://google.com'}) ;

logger.log('messageLogged something else',{id:1, url: 'http://yahoo.com'}) ;

