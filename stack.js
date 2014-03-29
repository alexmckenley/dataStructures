//Stack  

var LinkedList = require('./linkedList'); 

var makeStack = function(){
  var stack = {};
  var storage = new LinkedList();

  stack.push = function(val){
    storage.push(val)   
  };  

  stack.pop = function(){
    return storage.pop();
  };

  stack.size = function(){
    return storage.size; 
  };
  return stack;
};

module.exports = makeStack;

// var s = makeStack();
// console.log(s.size());
// s.push(4);
// s.push(5);
// s.push(6);
// s.push(7);
// console.log("Popping: " + s.size() + ' items');
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.size());
