var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');

	$stateProvider

		// HOME
		.state('home', {
			url: '/home',
			templateUrl: 'partials/home-view.html',
			data: {newView: 'home'}
		})

		// ABOUT
		.state('about', {
			url: '/about',
			templateUrl: 'partials/about-view.html',
			data: {newView: 'about'}
		})

		// NOVAPEX
		.state('novapex', {
			url: '/novapex',
			templateUrl: 'partials/novapex-view.html',
			data: {newView: 'novapex'}
		})

		// CALENDAr
		.state('calendar', {
			url: '/calendar',
			templateUrl: 'partials/calendar-view.html',
			data: {newView: 'calendar'}
		})


		// CONTACT
		.state('contact', {
			url: '/contact',
			templateUrl: 'partials/contact-view.html',
			data: {newView: 'contact'}
		});
});