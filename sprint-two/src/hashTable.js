var HashTable = function(){
  this._limit = 8;
  this._occupiedBuckets = 0;
  this._storage = makeLimitedArray(this._limit);
};


HashTable.prototype.manageStorageSize = function(){
  //cases for too high/low occupancy
  var occupancy = {status:null};
  occupancy.percentage = this._occupiedBuckets / this._limit;
  if(occupancy.percentage >= 0.75) occupancy.status = 'high';
  else if(occupancy.percentage < 0.25 && this._limit > 8) occupancy.status = 'low'; 
  if( occupancy.status ){

    //store temp new storage object
    var newStorage = {};
    newStorage.limit = (occupancy.status === "high") ? this._limit*2 : this._limit*0.5;
    newStorage.storage = makeLimitedArray(newStorage.limit);
    newStorage.occupiedBuckets = 0;

    //iterate current storage object, insert to temp storage object
    this._storage.each(function(bucketOfArrays){  //accessses list of buckets
      _.each(bucketOfArrays, function(arr, arrIndex){   //accesses [k, v] pairs inside buckets
        var i = getIndexBelowMaxForKey(arr[0], newStorage.limit);
        
        if( !newStorage.storage.get(i) ){
          newStorage.storage.set(i, []);
        }
          
        newStorage.storage.get(i).push( [ arr[0],arr[1] ] );
        ++newStorage.occupiedBuckets;
        }
      });
    });

    this._storage = newStorage.storage;
    this._limit = newStorage.limit;
    this._occupiedBuckets = newStorage.occupiedBuckets;
  }
};


HashTable.prototype.insert = function(key, value){
  
  //case for standard insertion
  var i = getIndexBelowMaxForKey(key, this._limit);
  var hashMap = this._storage;  //hashMap = Object {get: function, set: function, each: function}
  if( !hashMap.get(i)){// for null or undefined
    hashMap.set(i, [[key, value]] );
  }else{  //means hashMap bucket is occupied -> collision
    hashMap.get(i).push( [key, value] );  //hashMap.get(i) = 'val1'
  }
  this._occupiedBuckets++;
  //console.log("key:"+key + " value:"+value + " inserted. "+ "size("+this._limit+")");

  
  this.manageStorageSize();
};


HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucketOfArrays = this._storage.get(i);
  var result;
  if(bucketOfArrays){   //[ [Steve,Taylor][Bob, Saggot] ]
    _.each(bucketOfArrays, function(arr){
      if(arr[0] === key) result = arr[1];
    });
  }
  //console.log("key:"+key + " value:"+result + " retrieved. "+ "size("+this._limit+")");
  if(result) return result;
  else return null;
};


HashTable.prototype.remove = function(key){
  
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucketOfArrays = this._storage.get(i);
  var indexToSplice;
  if(bucketOfArrays){
    _.each(bucketOfArrays, function(arr, arrIndex){
      if(arr[0] === key) indexToSplice = arrIndex;
    });
  }
  if(indexToSplice !== undefined)
    bucketOfArrays.splice(indexToSplice, 1);
  this._storage.set(i, (bucketOfArrays.length > 0 ? bucketOfArrays : null) );
  this._occupiedBuckets--;
  //console.log("key:"+key + " value:"+result + " removed. "+ "size("+this._limit+")");
  
  this.manageStorageSize();
};





