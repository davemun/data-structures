var Graph = function(){
  this.storage = [];
  this.listValuesNodes = {};
};


Graph.prototype.fetchNode = function(nodeName){
  var foundNode;
  _.each(this.storage, function(node){
    if(node.value === nodeName){
      foundNode = node;
    }
  });
  return foundNode || "node not fetched";
};



Graph.prototype.addNode = function(nodeValue, toNode){
  
  //create blank node
  var newNode = {};
  newNode.value = nodeValue;
  newNode.edges = [];
  
  //link two nodes
  if (toNode !== undefined){
    this.addEdge( newNode, this.fetchNode(toNode) );
  }else if(this.storage.length === 1){
    //no edge arg input
    //entire graph only has one node
    //has not put newNode into graph yet
    this.addEdge(this.storage[0], newNode);
  }
  this.storage.push(newNode);
  this.listValuesNodes[nodeValue] = nodeValue;
};

//O(1)
Graph.prototype.contains = function(nodeValue){
  return _.contains(this.listValuesNodes, nodeValue);
    
    
};
//O(n^2)
Graph.prototype.removeNode = function(node){

  //find node and delete
  //if(this.contains(node)){
  for(var i = 0; i < this.storage.length; i++){
    if(this.storage[i].value === node){
      this.storage.splice(i, 1);
    }
  }
  //}

  //goes through the edges array of each node
  //then removes edges if they point to removed node
  for(var i = 0; i < this.storage.length; i++){
    for(var j = 0; j < this.storage[i].edges.length; j++){
      if(this.storage[i].edges[j].value === node){
        this.storage[i].edges.splice(j, 1);
      }
    }
  }

  delete this.listValuesNodes[node];

};

Graph.prototype.getEdge = function(fromNode, toNode){
  var hasEdge = false;

  //finds fromNode and inspects its edges(connections)
  _.each(this.storage, function(node){
    if(node.value === fromNode){
      
      //creates string array of fromNodes and checks if connection exists with toNode
      var nodeValueList = _.pluck(node.edges, 'value');
      hasEdge = _.contains(nodeValueList, toNode);
    }
  });
  return hasEdge;

};

Graph.prototype.addEdge = function(fromNode, toNode){
  //nodes objects add eachother to own edge list
  if(typeof fromNode === 'string' && typeof toNode === 'string'){
    fromNode = this.fetchNode(fromNode);
    toNode = this.fetchNode(toNode);
  }
  fromNode.edges.push(toNode);
  toNode.edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  fromNode = this.fetchNode(fromNode);
  toNode = this.fetchNode(toNode);

  //looks through fromNode's edges and removes references to toNode
  for(var i = 0; i < fromNode.edges.length; i++){
    if(fromNode.edges[i].value == toNode.value){
      fromNode.edges.splice(i, 1);
    }
  }
  if(fromNode.edges.length === 0){
    this.removeNode(fromNode.value)
  }

//looks through toNode's edges and removes references to fromNode
  for(var i = 0; i < toNode.edges.length; i++){
    if(toNode.edges[i].value == fromNode.value){
      toNode.edges.splice(i, 1);
    }
  }
  if(toNode.edges.length === 0){
    this.removeNode(toNode.value)
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */