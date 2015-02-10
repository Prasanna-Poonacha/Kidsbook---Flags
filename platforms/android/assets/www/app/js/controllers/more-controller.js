kids.controller('MoreController',['$scope','HomeContentApi',function($moreScope,HomeContentApi){
	$moreScope.init=function(){
		HomeContentApi.clearHistory();
	};
	$moreScope.init();	
}])