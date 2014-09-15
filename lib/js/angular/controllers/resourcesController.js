angular.module('uwdeca').controller('resourcesController', ['$scope', function ($scope){

	$scope.materials = array_utils.partition([
		{
			type: 'ppt',
			heading: 'DECA 101 Training Session',
			data: [
				{ title: 'Powerpoint', link: 'https://app.box.com/s/vekp45oorrn129yzcevi'}
			]
		},
		{
			type: 'case',
			heading: 'Practice Case Studies',
			data: [
				{ title: 'Accounting & Finance', link: 'https://app.box.com/s/sjhhy39jr2wnwqgbcjrz' },
				{ title: 'Business', link: 'https://app.box.com/s/m6ez7okrudjco1ryloev' },
				{ title: 'Fashion & Retail', link: 'https://app.box.com/s/7dnveo90qw1x720khrms' },
				{ title: 'Hospitality, Travel & Restaurant', link: 'https://app.box.com/s/uzd4vebaccjv37ob4eb1' },
				{ title: 'Law & Ethics', link: 'https://app.box.com/s/e09nqy40lcpdff3ys54c' },
				{ title: 'Marketing', link: 'https://app.box.com/s/gkhezvkogvv6v0wmsloo' }
			]
		},
		{
			type: 'mc',
			heading: 'DECA MC',
			data: [
				{ title: '2013 Practice Exams', link: 'https://app.box.com/s/3vm9in6dzllnlbnk2pnb' },
				{ title: 'Older Practice Exams', link: 'http://www.decau.ca/DECAUResources/Cluster%20Exams/Business%20Management%20and%20Administration%20Cluster%20Exams/' }
			]
		}
	], 3);

}]);