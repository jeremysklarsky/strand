(function(scope) {

	scope.Tooltip = Polymer({
		is: 'mm-tooltip',

		properties: {
			auto: { 
				type: String,
				value: "true", 
				refelctToAttribute: true,
				observer: "_autoChanged"
			},
			autoClose: {
				type: Boolean,
				value: false
			},
			tipWidth: {
				type: Number,
				value: false, // if not set, assume it should be the width of it's content
				refelctToAttribute: true,
				observer: "_widthChanged"
			},
			target: {
				value: Object,
				value: function() { return this.$.target; }
			},
			scope: {
				type: Object,
				value: function() { return this; }
			},
			direction: {
				type: String,
				value: "n"
			},
			offset: {
				type: Number,
				value: 0
			}
		},

		open: function(e) {
			this.state = "opened";
		},

		close: function(e) {
			this.state = "closed";
		},

		_widthChanged: function(newVal, oldVal) {
			this.$.panel.style.width = newVal + "px";
		},

		_autoChanged: function(newVal, oldVal) {
			this.autoClose = newVal === "true" ? true : false;
		},

		overHandler: function(e) {
			this.open();
		},

		outHandler: function(e) {
			if(this.autoClose) {
				this.close();
			}
		}
	});

})(window.Strand = window.Strand || {});