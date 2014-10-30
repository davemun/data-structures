var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.theSize = 0;
  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {
  push: function(value){
    this[this.theSize++] = value;
  },
  pop: function(){
    if(this.theSize > 0){
      this.theSize--;
      var temp = this[this.theSize];
      delete this[this.theSize];
      return temp;  
    }
  },
  size: function(){
    return this.theSize;
  }
};




