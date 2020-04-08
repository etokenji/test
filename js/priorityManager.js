
var PriorityManager = function(){
	var priority = ["trial","claim","contract"];

	this.findByTopPriorityQ = function( queues )
	{
		for (var i = 0 ; i < priority.length ; i++ ){
			for (var j = 0 ; j < queues.length ; j++){
				if(queues[j]["type"] != priority[i]){
					continue;
				} 
				return queues[j];
			}
		}
		return null;
	}

	//　引数キューより、高い優先順位か
	this.isHighPriority = function( source , target )
	{
		// 数値が小さいほど優先度高
		var sourcePriority = priority.indexOf(source["type"]);
		var targetPriority = priority.indexOf(target["type"]);

		return sourcePriority > targetPriority;
	}
}
