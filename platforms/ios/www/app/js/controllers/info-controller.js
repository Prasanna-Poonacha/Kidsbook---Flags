kids.controller('InfoController',['$scope','HomeContentApi',function($infoScope,HomeContentApi){
	$infoScope.init=function(){
		HomeContentApi.clearHistory();
	};
	$infoScope.init();	
}])