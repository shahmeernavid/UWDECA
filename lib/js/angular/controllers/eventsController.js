angular.module('uwdeca').controller('eventsController', ['$scope', function($scope){

	$scope.internal = [
		{
			title: 'UW DECA Kickoff',
			date: 'Tuesday, September 16th, from 6 to 8 PM',
			location: 'QNC 1502',
			desc: 'Are you interested in learning more about the University of Waterloo DECA Chapter? Then come on out to our annual Kick-Off event happening this Tuesday, September 16th, from 6 to 8 PM. The event will be happening in QNC 1502. Network with other club members, executives, and enjoy some free food!',
			link: 'https://www.facebook.com/events/557936121004984/'
		},
		{
			title: 'FEDS Club\'s Day',
			date: 'September 18th - 19th, from 10 AM to 3 PM',
			location: 'SLC Great Hall',
			desc: 'Come to the SLC Great Hall to check out the clubs that uWaterloo has to offer!'
		}
	];	

	$scope.external = [];

}]);