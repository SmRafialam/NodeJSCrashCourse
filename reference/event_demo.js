const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter{}

//init obj
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event', ()=> console.log('Event Fired!!'));

//init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');