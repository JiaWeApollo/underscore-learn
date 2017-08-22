(function(){
	
var nativeIsArray = Array.isArray,
	nativeKeys = Object.keys,
//	nativeBind = FuncProto.bind,
	nativeCreate = Object.create ;	
	
	var _=function(){
		
	};
	
	_.isObject=function(obj){
		var type= typeof(obj); //先存起来，防止重复定义
		return typeof(obj)==="function" || typeof(obj)==="object"  && !!obj; // !!obj将obj为null的情况排除，因为 typeof(obj)=null
	};		

    _.has=function(key,obj){
//  	if(!_.isObject(obj)) return false;
//  	return obj.hasOwnProperty(key);
        return obj != null && hasOwnProperty.call(obj,key);
    }

	_.keys=function(obj){
	/*这段是我写的keys代码
      if(this.isObject(value)){
      	var array=[];
      	for(var key in value){
      		array.push(key);
      	}
      	return array;
      }*/
     //查看源码后的优化
     if(!_.isObject(obj)) return [];
     if (nativeKeys) return nativeKeys(obj);
	     var keys=[];
	     for(var key in obj){
	     	if(_.has(key,obj)){
	     		keys.push(key); 
	     	}
	     } 
	     return keys;
	};
	
	window.$=_;
})()
