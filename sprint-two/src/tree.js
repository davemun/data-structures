var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend( newTree, treeMethods );

  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  //create new var
  var tree = makeTree(value);
  this.children.push(tree);

};

//inner function used
treeMethods.contains = function(target){

  var status = false;
  var recurseFunk = function(node){
    if(node.value === target){
      status = true;
    }
    
    if(node.children.length > 0){
      for(var i = 0; i < node.children.length;i++){
        recurseFunk( node.children[i] );
      }
    }
  };

  recurseFunk(this);
  return status;
};

//no inner function
treeMethods.contains2 = function(targetValue, targetNode){
  if(targetNode === undefined){
    targetNode = this;
  }

  if(node.value === target){
    return true;
  }
  //implies that itself is also not the target and it has no children to look up on
  if(node.children.length == 0){
    return false;
  }

  for(var i = 0; i < targetNode.children.length; i++){
    return (false || this.contains2(targetValue, targetNode.children[i]));
  }
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */