kids.controller('HomeController',['$scope',"$state","HomeContentApi",function($homeScope,$state,HomeContentApi){

	$homeScope.init=function(){
		HomeContentApi.clearHistory();
	};
	//$homeScope.init();
	
}])