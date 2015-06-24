/**
 * @license
 * Copyright (c) 2015 MediaMath Inc. All rights reserved.
 * This code may only be used under the BSD style license found at http://mediamath.github.io/strand/LICENSE.txt

*/
(function (scope) {

	 var Closable = {

	 	properties: {
	 		state: {
	 			type: String,
	 			notify: true,
	 			value: function() {
	 				return this.STATE_CLOSED
	 			}
	 		},
	 		isClosed: {
	 			type: Boolean,
	 			notify: true,
	 			computed: "_checkClosed(state)"
	 		}
	 	},

	 	get STATE_CLOSED() {
			return "closed";
		},

		get STATE_OPENED() {
			return "opened";
		},

	 	open: function(silent) {
	 		this.state = this.STATE_OPENED;
	 		!silent && this.fire("open");
	 	},

	 	close: function(silent) {
	 		this.state = this.STATE_CLOSED;
	 		!silent && this.fire("close");
	 	},

	 	toggle: function(silent) {
	 		if (this.state === this.STATE_OPENED) {
	 			this.close(silent);
	 		} else {
	 			this.open(silent);
	 		}
	 	},

	 	_checkClosed: function(state) {
	 		return state === this.STATE_CLOSED;
	 	},

	 };

	 scope.Closable = Closable;
})(window.StrandTraits = window.StrandTraits || {}); 