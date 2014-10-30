//Stack constructor
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.\
  this.theSize = 0;
  this.storage = {};
};

//Stack methods
Stack.prototype.size = function(){
  return this.theSize;
};

Stack.prototype.push = function(value){
  this.storage[this.theSize++] = value;
};

Stack.prototype.pop = function(){
  if(this.theSize > 0){
    var temp = this.storage[--this.theSize];
    delete this.storage[this.theSize];
    return temp;
  }
};
