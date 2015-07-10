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
			}
		},

		behaviors: [
			StrandTraits.AutoClosable,
			StrandTraits.AutoTogglable,
			StrandTraits.Stackable,
			StrandTraits.PositionableTip,
			StrandTraits.Stylable,
		],

	 	open: function(silent) {
	 		this.state = this.STATE_OPENED;
	 		!silent && this.fire("open");
	 		// var x = this.querySelector('#panelTmpl');
	 		// this.fire('panel-open', {target:this.target,template:x}, {node: document.body});
	 	},

	 	close: function(silent) {
	 		this.state = this.STATE_CLOSED;
	 		!silent && this.fire("close");
	 		// var x = this.querySelector('#panelTmpl');
	 		// this.fire('panel-close', {target:this.target,template:x}, {node: document.body});
	 	},

		_containerClass: function(state,direction) {
			var o = {};
			o[direction] = true;
			o[state] = true;
			return this.classBlock(o);
		},

		_updatePosition: function() {
			var winRect = this.windowMetrics,
				panelRect = this.metrics,
				targetRect = this.targetMetrics,
				offset = 0;

			this.direction = this._originalDirection;
			this._updateDirection(this.direction, panelRect, targetRect);	

			if(this.direction === 'n' || this.direction === 's') {

				offset = this._getOffset(panelRect.left, panelRect.right, winRect.left, winRect.right, panelRect.width, targetRect.width);
				// this._containerStyle = 'left: ' + offset + 'px';

				//window boundary flip:
				if(panelRect.top < winRect.top || panelRect.bottom > winRect.bottom) {
					this.direction = this._flipDirection(this.direction);
					this._updateDirection(this.direction, panelRect, targetRect);
				}
			} else {
				
				offset = this._getOffset(panelRect.top, panelRect.bottom, winRect.top, winRect.bottom, panelRect.height, targetRect.height);
				// this._containerStyle = 'top: ' + offset + 'px';

				//window boundary flip:
				if(panelRect.left < winRect.left || panelRect.right > winRect.right) {
					this.direction = this._flipDirection(this.direction);
					this._updateDirection(this.direction, panelRect, targetRect);
				}
			}

			// offset relative to document (?)
			// console.log(this.scope);
			if(this.scope === document){
				panelRect.left = targetRect.left;
				panelRect.top = targetRect.bottom;
			}

			if(this.overflow === 'hidden') { this.style.maxWidth = targetRect.width+"px"; }
			this.style.width = Math.max(targetRect.width,panelRect.width)+"px";
			// this.style.top = panelRect.top;
			// this.style.left = panelRect.left;

			panelRect.toCSS(this,true);
			// this.style.transform = 'translate3d(' + panelRect.x + 'px, ' + panelRect.y + 'px, 0)';
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
				case 'e':
					panelRect.top = targetRect.top;
					panelRect.left = targetRect.left + targetRect.width + this.offset;
					break;
				case 'w':
					panelRect.top = targetRect.top;
					panelRect.left = targetRect.left - panelRect.width - this.offset;
					break;
			}
		}

	});

})(window.Strand = window.Strand || {});