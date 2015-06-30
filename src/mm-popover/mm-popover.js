/**
 * @license
 * Copyright (c) 2015 MediaMath Inc. All rights reserved.
 * This code may only be used under the BSD style license found at http://mediamath.github.io/strand/LICENSE.txt

*/
Polymer({
	is: 'mm-popover',

	ready: function() {
		var hasFooter = Polymer.dom(this.$.footer).getDistributedNodes().length > 0;
		if(hasFooter) {
			this.classList.add('hasFooter');
		}
	},

	behaviors: [
		StrandTraits.PositionableTip
	]
});