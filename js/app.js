var app = angular.module('app', ['ui.router', 'ui.bootstrap']);

app.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/landing/videos');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './js/splash/splash.html',
    });

    $stateProvider.state('landing', {
        url: '/landing',
        templateUrl: './js/landing/landing.html',
    })
    .state('landing.bio', {
    	url: '/bio',
    	templateUrl: './js/landing/bio.html',
    })
    .state('landing.videos', {
    	url: '/videos',
    	templateUrl: './js/landing/videos.html',
    })
    .state('landing.music', {
    	url: '/music',
        controller: 'musicCtrl',
    	templateUrl: './js/landing/music.html',
    })
    .state('landing.press', {
    	url: '/press',
    	templateUrl: './js/landing/press.html',
    });

});

app.controller('landingCtrl', function($scope){
    
    $scope.showSocial = false;

    $scope.toggleSocial = function(){
        $scope.showSocial = !$scope.showSocial;
    }

});

app.controller('musicCtrl', function($scope, $uibModal){

    $scope.bow = function() {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: './js/landing/iWontBowModal.html',
            controller: 'modalCtrl',
            size: 'lg',
        });
    };

    $scope.justMe = function() {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: './js/landing/justMeModal.html',
            controller: 'modalCtrl',
            size: 'lg',
        });
    };

});

app.controller('modalCtrl', function($scope, $uibModalInstance){

    $scope.close = function(){
        $uibModalInstance.close();
    }

});


