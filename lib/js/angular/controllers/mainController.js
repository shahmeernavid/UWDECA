angular.module('uwdeca').controller('mainController', ['$scope', '$location', function($scope, $location){
	
	$scope.path = window.location.pathname;
	$scope.url = window.location.origin;

	$scope.$watch(function (){ return window.location.pathname; }, function (newVal){
		$scope.path = newVal;
	});

	$scope.facebookLink = 'https://www.facebook.com/UWDECA';
	$scope.flickrLink = 'http://s48.photobucket.com/user/uwdeca/slideshow/';
	$scope.twitterLink = 'https://twitter.com/UW_DECA';

	$scope.menu = [
		{
			title: 'about',
			dropdown: [
				{ title: 'faq' },
				{ title: 'executive team', link: '/about/executives' }
			]
		},
		{
			title: 'events',
			dropdown: [
				{ title: 'calendar' }
			]
		},
		{ 
			title: 'photos', 
			link: $scope.flickrLink, 
			target: '_blank' 
		},
		{
			title: 'resources'
		},
		{
			title: 'join',
			dropdown: [
				{
					title: 'mailing list',
					link: '/join/mail'
				},
				{
					title: 'executive positions',
					link: '/join/executive'
				}
			]
		}
	];

}]);