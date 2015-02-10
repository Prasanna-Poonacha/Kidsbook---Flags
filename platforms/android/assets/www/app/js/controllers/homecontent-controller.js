kids.controller('HomeContentController',['$scope','HomeContentApi','$timeout','$ionicLoading',function($homecontentscope, HomeContentApi,$timeout,$ionicLoading){
	$homecontentscope.showDataView=false;
	$homecontentscope.errorView=false;
	$homecontentscope.listItems={};

	$homecontentscope.GetListItems=function(){
		$ionicLoading.show({
			template: '<i class="icon ion-loading-a">'
		});
		HomeContentApi.all().then(function(data){	
			$homecontentscope.showDataView=true;
			$homecontentscope.errorView=false;	
			$homecontentscope.listItems=data;
			$ionicLoading.hide();				
		},function(data){
			console.log("error");
			$homecontentscope.showDataView=false;
			$homecontentscope.errorView=true;
			$ionicLoading.hide();	
		});
		/*$homecontentscope.showDataView=true;
		$homecontentscope.errorView=false;
		$homecontentscope.listItems=HomeContentApi.getAllLocal();*/
	};

	$homecontentscope.reload=function(){
		$homecontentscope.showDataView=false;
		$homecontentscope.errorView=false;
		HomeContentApi.clearItems();
		$homecontentscope.GetListItems();
	};

	$homecontentscope.doRefresh=function(){
		/*$timeout(function() {
	        $homecontentscope.$broadcast('scroll.refreshComplete');
	    }, 3000);*/
		HomeContentApi.clearItems();
	    HomeContentApi.all().then(function(data){	
			$homecontentscope.showDataView=true;
			$homecontentscope.errorView=false;	
			$homecontentscope.listItems=data;
			$homecontentscope.$broadcast('scroll.refreshComplete');						
		},function(data){
			console.log("error");
			$homecontentscope.showDataView=false;
			$homecontentscope.errorView=true;
			$homecontentscope.$broadcast('scroll.refreshComplete');				
		});	    		    
	    /*$http.get('/new-items')
	     .success(function(newItems) {
	       $scope.items = newItems;
	     })
	     .finally(function() {
	       // Stop the ion-refresher from spinning
	       $scope.$broadcast('scroll.refreshComplete');
	     });*/
	};

	$homecontentscope.GetListItems();
}])