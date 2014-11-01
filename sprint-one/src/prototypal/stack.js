var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar
  // but try not not reference your old code in writing the new style.

  var storage = Object.create(stackMethods);
  storage.theSize = 0;

  return storage;
};

var stackMethods = {
  size:function(){
    return this.theSize;
  },
  push:function(value){
    this[this.theSize++] = value;
  },
  pop:function(){
    if(this.theSize > 0){

      var temp = this[--this.theSize];
      delete this[this.theSize];
      return temp;
    }
  }
};

// [0:a] size = 1
// [0:a] size = 0
// [] size = 0
