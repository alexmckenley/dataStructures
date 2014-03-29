// Linked List

var LinkedList = function(){
  this.head = null;
  this.tail = null;
  this.size = 0;
};

var Node = function(val){
  this.next = null;
  this.value = val;
  this.prev = null;
};

LinkedList.prototype.addToHead = function(val){
  var node = new Node(val);
  this.size += 1;
  if(this.tail === null &&  this.head === null){
    this.head = node;
    this.tail = node;
    return node;
  }
  this.head.prev = node;
  var temp = this.head;
  this.head = node;
  node.next = temp;
  return node;
};

LinkedList.prototype.addToTail = function(val){
  var node = new Node(val);
  this.size += 1;
  if(this.tail === null &&  this.head === null){
    this.head = node;
    this.tail = node;
    return node;
  }
  console.log("tail: ", this.tail);
  node.prev = this.tail;
  this.tail.next = node;
  this.tail = node;
  return node;
};

LinkedList.prototype.removeFromHead = function(){
  if(this.tail === null &&  this.head === null){
    return null;
  }
  this.size -= 1;
  if(this.tail === this.head){
    return removeLastNode();
  }
  var temp = this.head;
  this.head = temp.next;
  this.head.prev = null;
  return temp;
}

LinkedList.prototype.removeFromTail = function(){
  if(this.tail === null &&  this.head === null){
    return null;
  }
  this.size -= 1;
  if(this.tail === this.head){
    return removeLastNode();
  }
  var temp = this.tail;
  this.tail = this.tail.prev;
  this.tail.next = null;
  return temp;
}

LinkedList.prototype.removeLastNode = function(){
  var temp = this.head;
  this.tail = null;
  this.head = null;
  return temp;
};

LinkedList.prototype.contains = function(){
  var current = this.head;
  while(current && current.next !== null){
    if(current.value === val){
      return true;
    }
  } 
  return false;
};

LinkedList.prototype.reverse = function(){
  var current = this.head;
  while(current){
  // console.log("Before: ", current);
    var next = current.next;
    current.next = current.prev;
    current.prev = next;
    // console.log("after: ", current);
    current = next;
  }
  var temp = this.head;
  this.head = this.tail;
  this.tail = temp;

  return this;
};

LinkedList.prototype.print = function(){
  var current = this.head;
  console.log("LinkedList: ");
  while(current){
    console.log(current.value);
    current = current.next;
  }
};

module.exports = LinkedList;

var l = new LinkedList();
l.addToHead(3);
l.addToTail(4);
l.addToTail(2);
l.removeFromHead();
l.addToHead(1);
l.print();
l.reverse()
l.print();

