var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.first = 0;
  this.nextAdd = 0;
  this.theSize = 0;
  this.storage = {};
};

Queue.prototype.size = function(){
  return this.theSize;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.nextAdd++] = value;
  ++this.theSize;
};

Queue.prototype.dequeue = function(){
  if(this.theSize > 0){
    var temp = this.storage[this.first];
    delete this.storage[this.first++];
    --this.theSize;
    if(this.theSize === 0){
      this.first = 0;
      this.nextAdd = 0;
    }
    return temp;
  }
};


// size=0 first=0 nextAdd=0
// []

// size=0 first=0 nextAdd=0
// [0:a]queue -write value to storage at current nextAdd. then increment nextAdd, then increment size
// size=1 first=0 nextAdd=1


// size=1 first=0 nextAdd=1
// [0:a, 1:b]queue -write value to storage at current nextAdd. then increment nextAdd, then increment size
// size=2 first=0 nextAdd=2

// size=2 first=0 nextAdd=2
// [1:b]dequeue - temp value at first. then decrement size. check if size==0, if so then reset number properties to 0. then return tempsize
// size =1 first = 1 nextAdd=2