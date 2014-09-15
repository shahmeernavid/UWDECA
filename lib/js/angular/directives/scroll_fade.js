angular.module('uwdeca').directive('scrollFade', [function(){
	// Runs during compile
	return {
		link: function($scope, $elem, attr, controller) {
			var startOpacity = parseInt(attr.startOpacity) || 1,
					endOpacity = parseInt(attr.endOpacity) || 0,
					startScroll = parseInt(attr.startScroll),
					endScroll = parseInt(attr.endScroll),
					startOffset = parseInt(attr.startOffset) || 0,
					endOffset = parseInt(attr.endOffset) || 0;

			if(!startScroll && startScroll !== 0){
				startScroll = $elem.offset().top ;
			}
			if (!endScroll && endScroll !== 0){
				endScroll = $elem.offset().top + $elem.height();
			}

			if (!startScroll && startScroll !== 0 || !endScroll && endScroll !== 0){
				console.error('Start or End scroll incorrectly defined. Ensure element has a defined height');
			}

			startScroll += startOffset;
			endScroll -= endOffset;

			$(window).scroll(function (e){
				var currentScroll = $(window).scrollTop(),
						currentOffset = currentScroll - startScroll,
						// What percentage of the scroll distance we have covered
						scrollRatio = currentOffset / (endScroll - startScroll),
						// amount of opacity we covered
						opacityDelta = scrollRatio * (endOpacity - startOpacity);

				$elem[0].style.opacity =  startOpacity + opacityDelta;

			});
		}
	};
}]);