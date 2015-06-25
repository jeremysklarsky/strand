/**
 * @license
 * Copyright (c) 2015 MediaMath Inc. All rights reserved.
 * This code may only be used under the BSD style license found at http://mediamath.github.io/strand/LICENSE.txt

*/
(function(scope) {


	scope.ClosePanel = Polymer({
		is: 'mm-close-panel',

		behaviors: [
			StrandTraits.PositionableTip
		]

	});

})(window.Strand = window.Strand || {});
