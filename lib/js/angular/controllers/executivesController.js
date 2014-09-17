angular.module('uwdeca').controller('executivesController', ['$scope', function ($scope){

	$scope.execs = array_utils.partition([
		{
			name: 'tiffany chow',
			bio: '',
			level: 'Co-President'
		},
		{
			name: 'leting liu',
			bio: '',
			level: 'Co-President'
		},
		{
			name: 'cristina matei',
			bio: '',
			level: 'senior executive'
		},
		{
			name: 'katherine chan',
			bio: '',
			level: 'senior executive'
		},
		{
			name: 'cherrie shi',
			bio: '',
			level: 'senior executive'
		},
		{
			name: 'wayne wong',
			bio: '',
			level: 'senior executive'
		},
		{
			name: 'shahmeer navid',
			bio: '',
			level: 'senior executive'
		},
		{
			name: 'kevin nguyen',
			bio: '',
			level: 'senior executive'
		},
		{
			name: 'siddhanth unnithan',
			bio: '',
			level: 'senior executive'
		},
		{
			name: 'kevin li',
			bio: '',
			level: 'senior executive'
		},
		{
			name: 'jordan lee',
			bio: '',
			level: 'senior executive'
		}
	], 4);
		
}]);