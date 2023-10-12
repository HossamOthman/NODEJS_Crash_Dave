const logEvents = require('./logEvents');

const EventEmitter = require('events');

// basically we're extending a class... 
class MyEmitter extends EventEmitter {};

// initialize object that we'Re going to create...
const myEmitter = new MyEmitter();

// add a listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    // emit event... just to add a little bit of delay to it
    myEmitter.emit('log', '3rd log event emitted...!');
}, 2000);