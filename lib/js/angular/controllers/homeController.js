angular.module('uwdeca').controller('homeController', ['$scope', '$http', '$sce', function ($scope, $http, $sce){
	$scope.fbFeed = [];
	$scope.twFeed = [];
 
  $scope.currentSliderIndex = 0;
  $scope.images = [
    'img/slider/logo.png',
    '/img/slider/kickoff.png'
  ];


	
	// $http.get('/fb?path=/UWDECA/feed?fields=message,story,picture,full_picture&limit=25').success(function (data){
	// 	$scope.fbFeed = _.each(_.filter(data.data, function (elem){ return elem.message; }), function (elem){
	// 		elem.message = $sce.trustAsHtml(elem.message.replace(/(https?:\/\/.*?)( |$|\)|\(|\"|\'|\[|\]|\}|\{){1}/gm, '<a href="$1">$1</a>$2'));
	// 	});

	// }).error(function (err){
	// 	// TODO: handle err
	// });

	// // TODO: handle err
	// $http.get('/fb?path=/UWDECA/posts?fields=message,story,picture,full_picture&limit=25').success(function (data){

	// }).error(function (err){

	// });
}]);