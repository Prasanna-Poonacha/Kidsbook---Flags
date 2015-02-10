// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var kids = angular.module('kidsapp', ['ionic'])

kids.run(['$ionicPlatform','$rootScope', function($ionicPlatform,$rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      navigator.splashscreen.hide();
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      // Halt state change from even starting
      //evt.preventDefault();
      // Perform custom logic
      //var meetsRequirement = /* ... */
      // Continue with the update and state transition if logic allows
      //if (meetsRequirement) $urlRouter.sync();
      //console.log(event);
      console.log(fromState);
    console.log(toState);
    //console.log(toParams);    
    //console.log(fromParams);
    });
}])

kids.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('home', {
      url: "/home",
      abstract:true,
      templateUrl: "app/templates/home.html"      
    })

     .state('home.page', {
      url: '/homepage',
      views: {
        'tab-home': {
          templateUrl: 'app/templates/startpage.html',
          controller: 'HomeController'          
        }
      }
    })

    .state('home.tab', {
      url: '/hometab',
      views: {
        'tab-home': {
          templateUrl: 'app/templates/home-content.html',
          controller: 'HomeContentController'          
        }
      }
    })

    .state('home.detail', {
      url: '/homedetail/:id',
      views: {
        'tab-home': {
          templateUrl: 'app/templates/home-detail.html',
          controller: 'HomeDetailController'          
        }
      }
    })

    .state('home.info', {
      url: '/info',
      views: {
        'tab-info': {
          templateUrl: 'app/templates/info.html' ,
          controller : 'InfoController'     
        }
      }
    })

    .state('home.more', {
      url: '/more',
      views: {
        'tab-more': {
          templateUrl: 'app/templates/more.html',
          controller : 'MoreController'        
        }
      }
    });

    // Each tab has its own nav history stack:

    /*.state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });*/

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home/homepage');

}]);

