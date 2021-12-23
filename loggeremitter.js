const EventEmitter = require ('events');

class Logger extends EventEmitter{

    log(message){
        console.log(message);
        this.emit('messageLogged','i am the emitter');
    }
}

module.exports=Logger;