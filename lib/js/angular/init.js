window.array_utils = require('../../lib/js/utilities/array');
window._ = require('underscore'); 


angular.module('uwdeca', ['ngRoute', 'ui.bootstrap']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/partials/home.html',
			controller: 'homeController'
		})
		.when('/about', {
			templateUrl: '/partials/about.html'
		})
		.when('/about/faq', {
			templateUrl: '/partials/faq.html'
		})
		.when('/about/executives', {
			templateUrl: '/partials/executives.html',
			controller: 'executivesController'
		})
		.when('/events', {
			templateUrl: '/partials/events.html',
			controller: 'eventsController'
		})
		.when('/events/calendar', {
			templateUrl: '/partials/calendar.html',
			controller: 'calendarController'
		})
		.when('/resources', {
			templateUrl: '/partials/resources.html',
			controller: 'resourcesController'
		})
		.when('/join', {
			templateUrl: '/partials/join.html'
		})
		.when('/join/executive', {
			templateUrl: '/partials/join_executive.html'
		})
		.when('/join/mail', {
			templateUrl: '/partials/join_mail.html'
		})
		.otherwise({
			templateUrl: '/partials/404.html'
		});

	$locationProvider.html5Mode(true);
}]);