kids.service('HomeContentApi',['$q','$location','$state','$http','$timeout','$ionicViewService',function($q, $location, $state,$http,$timeout,$ionicViewService){
/*var listItems=[
				{id:0,title:"India",url:"http://www.sciencekids.co.nz/images/pictures/flags120/India.jpg"},
				{id:1,title:"France",url:"http://www.sciencekids.co.nz/images/pictures/flags120/France.jpg"},
				{id:2,title:"Denmark",url:"http://www.sciencekids.co.nz/images/pictures/flags120/Denmark.jpg"}
			];*/
var listItems=[];
var clearItems=function(){
  listItems=[];
}
var getListItems=function(){
	var d=$q.defer();
	if(listItems.length===0){
  		var input={};
  		
  		input.url='http://kidservice.neel-blue.com/api/Flags/FlagDetails';
  		input.method="GET";
  		var request = $http(input);
  		request.success(function(data, status, headers, config){
  			listItems=data;
  			d.resolve(data);  			
  		})
  		.error(function(data, status, headers, config){
  			d.reject(data);  			
  		});
  		
  	}
  	else{
		d.resolve(listItems);
  	}
  	return d.promise;
  }

  var clearHistory=function(){
    $ionicViewService.clearHistory();
  }

return{
		all:getListItems,
		get:function(listId){
			return listItems[listId];
		},
		getAllLocal:function(){
			return listItems;
		},
    clearHistory:clearHistory,
    clearItems:clearItems
	}

}]);