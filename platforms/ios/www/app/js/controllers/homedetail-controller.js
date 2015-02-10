kids.controller('HomeDetailController',['$scope','HomeContentApi','$stateParams', function($homedetailscope, HomeContentApi, $stateParams){

	$homedetailscope.listItem = HomeContentApi.get($stateParams.id);
	
}])