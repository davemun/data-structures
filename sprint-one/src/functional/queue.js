var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = 0;
  var nextAdd = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    //fifo
    storage[nextAdd] = value;
    nextAdd++;
    size++;
  };
  
  someInstance.dequeue = function(){
    
    if(size > 0){
      --size;
      var temp = storage[first];
      delete storage[first++];
      if(size ===0 ){
        first = 0;
        nextAdd = 0;
      }

      return temp;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};

/*
variables before
objectsafterchange and instructions
variables after change


first=0 size=0 nextAdd=0
[]
first=0 size=0 nextAdd=0

first=0 size=0 nextAdd=0
queue adds at current nextAdd, then increments size AND increments nextAdd
[0:a]
first=0 size=1 nextAdd=1

first=0 size=1 nextAdd=1
queue adds at current nextAdd, then increments size AND increments nextAdd
[0:a, 1:b]
first=0 size=2 nextAdd=2

first=0 size=2
dequeue return at current first, then increments first, then decrements size
[1:b]
first=1 size=1 nextAdd=2

first=1 size=1 nextAdd=2
queue adds at current nextAdd, then increments size AND increments nextAdd
[1:b, 2:c]
first=1 size=2 nextAdd=3


first=1 size=2 nextAdd=3
dequeue return at current first, then increments first, then decrements size
[2:c]









*/