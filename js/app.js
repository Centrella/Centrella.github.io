var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

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
    	templateUrl: './js/landing/music.html',
    })
    .state('landing.press', {
    	url: '/press',
    	templateUrl: './js/landing/press.html',
    });

});
