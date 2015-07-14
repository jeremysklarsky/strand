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
			scope: {
				type: Object,
				value: function() { return this; }
			},
			panel: {
				type: Object,
				value: function() { return this.$.panel; }
			},
			target: {
				type: Object,
				value: function() { return this.$.target; }
			},
			state: {
				type: String,
				value: "closed",
			},
			overflow: {
				type: String,
				value: "hidden"
			},
			type: {
				type: String,
				value: "primary"
			},
			direction: {
				type: String,
				value: "s",
			},
			disabled: {
				type: Boolean,
				value: false,
			},
			error: {
				type: Boolean,
				value: false,
			},
			fitparent: {
				type: Boolean,
				value: false
			},
			layout: String
		},

		behaviors: [
			StrandTraits.AutoClosable,
			StrandTraits.AutoTogglable,
			StrandTraits.Stylable,
		],

		ready: function() {
			if(!this.toggleTrigger) {
				this.toggleTrigger = this.target;
			}
		},

		detached: function() {
			var pl = document.querySelector('mm-panel-layer');
			if(pl) {
				pl.removeChild(this.$.panel);
			}
		},

		open: function() {
			this.state = this.STATE_OPENED;
			this.panel.open();
		},

		close: function() {
			this.state = this.STATE_CLOSED;
			this.panel.close();
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
	});

})(window.Strand = window.Strand || {});