/**
 * @license
 * Copyright (c) 2015 MediaMath Inc. All rights reserved.
 * This code may only be used under the BSD style license found at http://mediamath.github.io/strand/LICENSE.txt

*/
(function(scope) {

	var Rectangle = StrandLib.Rectangle;

	scope.PulldownButton = Polymer({

		is: 'mm-pulldown-button',

		properties: {
			target: {
				type: Object,
				value: function() { return this.$.target; }
			},
			scope: {
				type: Object,
				value: function() { return this; }
			},
		},

		behaviors: [
			StrandTraits.AutoTogglable,
			StrandTraits.Dropdownable,
			StrandTraits.Stylable,
		],

		ready: function() {
			if(!this.toggleTrigger) {
				this.toggleTrigger = this.target;
			}
		},

		_updateButtonClass: function(direction, fitparent, error, state, type) {
			var o = {};
			o["button"] = true;
			o["fit"] = fitparent;
			o["invalid"] = error;
			o[type] = true;
			o[state] = true;
			o["top"] = (direction === 'n');
			o["bottom"] = (direction === 's');
			return this.classBlock(o);
		},

		open: function(silent) {
	 		this.state = this.STATE_OPENED;
	 		// !silent && this.fire("open");
	 		var x = this.querySelector('#panelTmpl');
	 		this.fire('panel-open', {context:this,template:x}, {node: document.body});
	 	},

	 	close: function(silent) {
	 		this.state = this.STATE_CLOSED;
	 		// !silent && this.fire("close");
	 		var x = this.querySelector('#panelTmpl');
	 		this.fire('panel-close', {context:this,template:x}, {node: document.body});
	 	},
	});

})(window.Strand = window.Strand || {});