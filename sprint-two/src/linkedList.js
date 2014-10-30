var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
      var newNode = makeNode(value);
      
      if(list.head === null && list.tail === null){
          list.head = newNode;
          list.tail = newNode;

      }else{
          list.tail.next = newNode;
          list.tail = newNode;
      }
      
  };

  list.removeHead = function(){
      var tempVal = list.head.value;
      list.head = list.head.next;
      return tempVal;

  };
  
  
  list.contains = function(targetValue){
    var currentNode = list.head;
    while(currentNode !== null){
        if(currentNode.value === targetValue){
            return true;
        }
        currentNode = currentNode.next;
    }
    return false;
  };


  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */