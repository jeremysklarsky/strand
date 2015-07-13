(function(scope) {

	scope.PanelLayer = Polymer({
		is: 'mm-panel-layer',

		properties: {
			panels: {
				type: Object,
				value: function() { return new WeakMap(); }
			}
		},

		open: function(context) {
			if( !this.panels.has(context) ) {
				var panel = context.panel;
				this.appendChild(panel);
				this.panels.set(context,panel);
			} 
		}
	});

})(window.Strand = window.Strand || {});