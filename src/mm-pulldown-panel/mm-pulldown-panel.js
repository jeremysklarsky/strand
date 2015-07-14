(function(scope) {

	scope.MenuPanel = Polymer({
		is: 'mm-pulldown-panel',

		properties: {
			direction: {
				notify: true,
				type: String,
			},
			boundaryOffset: {
				type: Number,
				value: 0,
			},
		},

		behaviors: [
			StrandTraits.Stackable,
			StrandTraits.PositionableTip,
			StrandTraits.Stylable,
			StrandTraits.Reparentable,
		],

		_containerClass: function(state,direction) {
			var o = {};
			o[direction] = true;
			o[state] = true;
			return this.classBlock(o);
		},

		_updatePosition: function() {
			var winRect = this.windowMetrics,
				panelRect = this.metrics,
				targetRect = this.targetMetrics;

			this.direction = this._originalDirection;
			this._updateDirection(this.direction, panelRect, targetRect);	

			if(this.direction === 'n' || this.direction === 's') {
				// window boundary flip:
				if(panelRect.top < winRect.top || panelRect.bottom > winRect.bottom) {
					this.direction = this._flipDirection(this.direction);
					this._updateDirection(this.direction, panelRect, targetRect);
				}
			}

			panelRect.left = targetRect.left;

			if(this.overflow === 'hidden') { this.style.maxWidth = targetRect.width+"px"; }
			this.style.width = Math.max(targetRect.width,panelRect.width)+"px";

			panelRect.toCSS(this,true);
		},

		_updateDirection: function(direction, panelRect, targetRect) {
			switch(direction) {
				case 'n':
					panelRect.top = targetRect.top - panelRect.height - this.offset;
					panelRect.marginLeft = targetRect.left;
					break;
				case 's':
					panelRect.top = targetRect.top + targetRect.height + this.offset;
					panelRect.marginLeft = targetRect.left;
					break;
			}
		},

	});

})(window.Strand = window.Strand || {});