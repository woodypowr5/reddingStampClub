var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngSanitize']);

app.config(function($stateProvider, $urlRouterProvider, $provide){

	$urlRouterProvider.otherwise('/home');

	$stateProvider

		// HOME
		.state('home', {
			url: '/home',
			templateUrl: 'partials/home-view.html',
			data: {newView: 'home'}
		})

		// LEADERSHIP
		.state('leadership', {
			url: '/leadership',
			templateUrl: 'partials/leadership-view.html',
			data: {newView: 'leadership'}
		})

		// NOVAPEX
		.state('novapex', {
			url: '/novapex',
			templateUrl: 'partials/novapex-view.html',
			data: {newView: 'novapex'}
		})

		// CALENDAR
		.state('calendar', {
			url: '/calendar',
			templateUrl: 'partials/calendar-view.html',
			data: {newView: 'calendar'}
		})

		// CALENDAR
		.state('links', {
			url: '/links',
			templateUrl: 'partials/links-view.html',
			data: {newView: 'links'}
		})

		// CALENDAR
		.state('news', {
			url: '/news',
			templateUrl: 'partials/news-view.html',
			data: {newView: 'news'}
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