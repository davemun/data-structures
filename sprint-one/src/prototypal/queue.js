var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = Object.create(queueMethods);
  storage.theSize = 0;
  storage.first = 0;
  storage.nextAdd = 0;

  return storage;
};

var queueMethods = {
  size:function(){
    return this.theSize;
  },
  enqueue:function(value){
    this[this.nextAdd++] = value;
    ++this.theSize;
  },
  dequeue:function(){
    if(this.theSize > 0){
      //get value of item at keyFirst, then INCREMENT first
      //decrement size
      var temp = this[this.first];
      delete this[this.first++];
      --this.theSize;

      if(this.theSize === 0){
        this.first = 0;
        this.nextAdd = 0;
      }
      return temp;
    }

  }
};

/*
[] size = 0 first = 0 nextAdd =0
[0:a]size = 1 first = 0 nextAdd =1
[0:a, 1:b]size =2 first = 0 nextAdd = 2

[1:b] size =1 first = 1 nextAdd =2

*/