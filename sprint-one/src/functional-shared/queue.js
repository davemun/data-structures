var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {}
  newQueue.theSize = 0;
  newQueue.first = 0;
  newQueue.nextAdd = 0;

  extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = { 
  enqueue:function(value){
    this[this.nextAdd++] = value;
    this.theSize++;
  },
  dequeue:function(){
    if(this.theSize > 0){
      var temp = this[this.first];
      delete this[this.first++];
      this.theSize--;
    }
    
    if(this.theSize === 0){
      
      this.first = 0;
      this.nextAdd =0;
    }
    return temp;
  },
  size:function(){  
    return this.theSize;
  }
};


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
