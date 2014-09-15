// TODO: add cool stuff
angular.module('uwdeca').directive('calendar', [function(){
	// Runs during compile
	return {
		// {} = isolate, true = child, false/undefined = no change
		link: function($scope, $elem, attrs, controller) {
			$elem.fullCalendar({
				events: attrs.gcal || attrs.events || {}
			});
		}
	};
}]);
