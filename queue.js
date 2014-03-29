//Queue

var LinkedList = require('./linkedList');

var queueMethods = {
  enqueue: function(val){
    this.storage.addToHead(val);  
    return val;
  },
  dequeue: function(){
    return this.storage.pop(); 
  },
  size: function(){
    return this.storage.size();
  }
};

var makeQueue = function(){
  var queue = Object.create(queueMethods);
  queue.storage = new LinkedList();

  return queue;
};

// var q = makeQueue();
// q.enqueue(2);
// q.enqueue(3);
// q.enqueue(4);
// q.enqueue(5);
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
