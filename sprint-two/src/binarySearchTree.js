var makeBinarySearchTree = function(value){
  var node = Object.create( makeBinarySearchTree.methods );
  node.left = null;
  node.right = null;
  node.value = value;

  return node;
};



makeBinarySearchTree.methods = {};
//brian's first inner function version that didn't work
// makeBinarySearchTree.methods.insert = function(value){
//   var newNode = makeBinarySearchTree(value);
  
//   //this needs to refer to current examined node
//   //newNode is the one we're adding on
//   var recursFunk = function(node){
//     //base cases for left side
//     if( (newNode.value < this.value) && this.left === null ){
//       this.left = newNode;
//     }
//     //base cases for right side
//     else if( (newNode.value > this.value) && this.right === null ){
//       this.right = newNode;
//     }
//     else if( (newNode.value < this.left.value) && node.left !== null ){
//       //recursFunk(this.left);//?
//       recursFunk.call(node.left, this.left);
//     }
//     else if( (newNode.value > this.right.value) && node.right !== null ){
//       //recursFunk(this.right);//?
//       //what this is, argument
//       recursFunk.call(node.right, this.right);
//     }
//   };


//   recursFunk.call(this, newNode);
// };

//brian second inner version function works
// makeBinarySearchTree.methods.insert = function(value){
//   var newNode = makeBinarySearchTree(value);
//   var rootNode = this;
//   recursFunk(rootNode);


//   function recursFunk(node){
//     if(newNode.value < node.value){
//       if(node.left === null){
//         node.left = newNode;
//       }else{
//         recursFunk(node.left);
//       }
//     }else if(newNode.value > node.value){
//       if(node.right === null){
//         node.right = newNode;
//       }else{
//         recursFunk(node.right);
//       }
//     }
//   };
// };

//brian's refactored copied style off dave
makeBinarySearchTree.methods.insert = function(value){
  var newNode = makeBinarySearchTree(value);
  var rootNode = this;
  recursFunk(rootNode);


  function recursFunk(node){
    var direction = (newNode.value < node.value) ? 'left': 'right';
    if(node[direction] === null){
      node[direction] = newNode;
    }else{
      recursFunk(node[direction]);
    }
  };
};





//dave's refactored classic style
//  makeBinarySearchTree.methods.insert = function(value, node){
//    node = node || this;
//    var direction = (value < node.value) ? 'left': 'right';
//      if(node[direction] === null){
//        node[direction] = makeBinarySearchTree(value);   
//      }else if (node[direction] !== null){
//        node[direction].insert(value, node[direction]);
//      } 
//  };

//dave's first classic style
makeBinarySearchTree.methods.insert = function(value, node){
  if(node === undefined){
    node = this;
  }
  var newNode = makeBinarySearchTree(value);
  //refactor with bracket notation direction variable for funsies
  if(newNode.value < node.value){
    if(node.left === null){
      node.left = newNode;   
    }else if (node.left !== null){
      node.insert(newNode.value, node.left);
    }  
  }else if(newNode.value > node.value){
    if(node.right === null ){
      node.right = newNode;
    }else if (node.right !== null){
      node.insert(newNode.value, node.right);
    }
  }
};


makeBinarySearchTree.methods.contains = function(targetValue, node){
  
  if(node === undefined){
    node = this;
  }

  if(node.value === targetValue){
    return true;
  }else if(node.left === null && node.right === null){
    return false;
  }

  if(node.left !== null && targetValue < node.value){
    return (false || node.left.contains(targetValue, node.left) );
  }
  if(node.right !== null && targetValue > node.value){
    return (false || node.right.contains(targetValue, node.right) );
  }
};

makeBinarySearchTree.methods.depthFirstLog = function(callback, node){
  if(node === undefined){
    node = this;
  }
  callback(node.value)

  if(node.left !== null){
    node.depthFirstLog(callback, node.left);
  }
  if(node.right !== null){
    node.depthFirstLog(callback, node.right);
  }
};
