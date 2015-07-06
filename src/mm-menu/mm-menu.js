(function(scope) {

	scope.Menu = Polymer({
		is: 'mm-menu',

		properties: {
			target: {
				value: Object,
				value: function() { return this.$.target; }
			},
			scope: {
				type: Object,
				value: function() { return this; }
			},
			state: {
				type: String,
				value: "closed",
			},
			direction: {
				type: String,
				value: "s"
			},
			offset: {
				type: Number,
				value: 0,
			}
		},

		open: function() {
			this.state = "opened";
		},

		close: function() {
			this.state = "closed";
		},

		toggle: function(e) {
			this.state = (this.state === "closed") ? "opened" : "closed" ;
		}
	});

})(window.Strand = window.Strand || {});