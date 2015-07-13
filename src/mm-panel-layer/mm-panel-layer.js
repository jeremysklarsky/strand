(function(scope) {

	scope.PanelLayer = Polymer({
		is: 'mm-panel-layer',

		flush: function() {
			var c = this.children;
			for (var i=0; i<c.length; i++) {
				this.removeChild(c[i]);
			}
		}
	});

})(window.Strand = window.Strand || {});