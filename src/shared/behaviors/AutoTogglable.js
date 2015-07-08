/**
 * @license
 * Copyright (c) 2015 MediaMath Inc. All rights reserved.
 * This code may only be used under the BSD style license found at http://mediamath.github.io/strand/LICENSE.txt

*/
(function (scope) {

	var AutoTogglable = {

		properties: {
			toggleTrigger: {
				type: Object,
				observer: '_triggerChanged'
			}
		},

		created: function() {
			this._boundToggle = this.toggle.bind(this);
		},

		detached: function() {
			this._removeListener(this.trigger);
		},

		_addListener: function(trigger) {
			if(trigger && trigger.addEventListener) {
				trigger.addEventListener('click', this._boundToggle);
			}
		},

		_removeListener: function(trigger) {
			if(trigger && trigger.removeEventListener) {
				trigger.removeEventListener('click', this._boundToggle);
			}
		},

		_triggerChanged: function(trigger, oldTrigger) {
			var scope = this.scope || document;

			if(typeof trigger === 'string') {
				// this.toggleTrigger = document.querySelector(trigger);
				this.toggleTrigger = scope === document ? 
				document.querySelector(trigger) : Polymer.dom(scope).querySelector(trigger);
			}

			this._removeListener(oldTrigger);
			this._addListener(trigger)
		}
	};

	scope.AutoTogglable = [
		scope.Closable, 
		AutoTogglable
	];
})(window.StrandTraits = window.StrandTraits || {}); 