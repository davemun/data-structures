//addNodes, contains

var Graph = function(){
  this.storage = [];
  this.listValuesNodes = {};
};

Graph.prototype.addNode = function(nodeValue, toNode){
  var newNode = {};
  newNode.value = nodeValue;
  newNode.edges = [];
  if (toNode !== undefined){
    this.addEdge(nodeValue, toNode);
  }else if(this.storage.length === 1){
    
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
      if(this.storage[i].edges[j] === node){
        this.storage[i].edges.splice(j, 1);
      }
    }
  }

  delete this.listValuesNodes[node];

};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*

 aGraph = {
  storage = [];
  //methods
 }

 aNode = {
  value;
  edges = [];
 }

 someGraph = {
  storage = [
    someNode = {
        value = someValue;
        edges = [edgesThatThisNodeConnectsTo]
      }
    ]

}
*/