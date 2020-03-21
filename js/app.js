var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngSanitize', 'anim-in-out']);

app.config(function($stateProvider, $urlRouterProvider, $provide){

	$urlRouterProvider.otherwise('/home');

	$stateProvider

		// HOME
		.state('home', {
			url: '/home',
			templateUrl: 'partials/home-view.html',
			data: {newView: 'home'}
		})

		// LINKS
		.state('links', {
			url: '/links',
			templateUrl: 'partials/links-view.html',
			data: {newView: 'links'}
		})

		// CONTACT
		.state('contact', {
			url: '/contact',
			templateUrl: 'partials/contact-view.html',
			data: {newView: 'contact'}
		});

		$provide.decorator('$uiViewScroll', function ($delegate) {
		    return function (uiViewElement) {

		      // var top = uiViewElement.getBoundingClientRect().top;
		      // window.scrollTo(0, (top - 30));
		      // Or some other custom behaviour...
		    }; 
		  });
});