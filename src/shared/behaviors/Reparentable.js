(function (scope) {

	var Reparentable = {

		open: function(silent) {
			if(!this.reparented) {
				var pl = document.querySelector('mm-panel-layer') || document.body.appendChild( document.createElement('mm-panel-layer') );
				pl.appendChild(this);
				this.reparented = true;
			}
			this.state = this.STATE_OPENED;
	 		!silent && this.fire("open");
		}

	}

	scope.Reparentable = [
		scope.Closable,
		Reparentable
	];

})(window.StrandTraits = window.StrandTraits || {});