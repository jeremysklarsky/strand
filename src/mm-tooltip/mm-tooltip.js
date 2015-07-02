(function(scope) {
	
	/*
	var _instances = [],
		_currentInstance = null,
		_previousInstance = null,
		_closePanel = null;

	function _addInstance(instance) {
		if(_instances.length === 0 && _closePanel === null) { 
			_createClosePanel(); 
		}
		_instances.push(instance);
	}

	function _removeInstance(instance) {
		_instances.splice(_instances.indexOf(instance), 1);
	}

	function _setCurrentInstance(instance) {
		_previousInstance = _currentInstance !== null ? _currentInstance : null;
		_currentInstance = instance;
	}

	function _hideClosePanel(instance) {
		if(instance == _currentInstance) {
			_closePanel.close();
		}
	}

	function _showClosePanel(instance) {
		if(instance == _currentInstance) {
			// clean up any existing "auto" tooltips, so the close panel can be reused:
			if (_previousInstance && _previousInstance.auto === false) {
				_previousInstance.close();
			}
			_closePanel.auto = instance.auto;
			_closePanel.open();
		}
	}

	function _createClosePanel() {
		_closePanel = new MMClosePanel();
		_closePanel.offsetY = 0;
		_closePanel.mode = "tooltip";
		_closePanel.state = _closePanel.STATE_CLOSED;
		_closePanel.targetFilter = _closeFilter;
		_closePanel.scope = _closePanel;
		document.body.appendChild(_closePanel);
	}

	function _closeFilter(instance, e) {
		function contains(rect, x, y) {
			return rect.left < x && rect.right > x && rect.top < y && rect.bottom > y;
		}

		var closeIcon = _closePanel.$.closeIcon,
			closeBound = contains(Measure.getBoundingClientRect(_closePanel.$.closeIcon), e.clientX, e.clientY);

		if (closeBound) {
			_currentInstance.close();
		}
	}
	*/

	scope.Tooltip = Polymer({
		is: 'mm-tooltip',

		behaviors: [

		],

		properties: {
			// model: null,
			// valign: { value: "top", reflect: true },
			auto: { 
				type: Boolean,
				value: true, 
				refelctToAttribute: true 
			},
			// align: "center",
			// state:'closed',
			tipWidth: {
				type: Number,
				value: false, // if not set, assume it should be the width of it's content
				refelctToAttribute: true
			},
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
				value: "closed"
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
		
		// STATE_OPENED: "opened",
		// STATE_CLOSED: "closed",
		
		// attached: function() {
		// 	_addInstance(this);
		// },

		// detached: function() {
		// 	_removeInstance(this);
		// },

		ready: function(){
			// console.log("this.scope: ", this.scope);
		},

		open: function(e) {
			// this.configurePanel();
			// this.state = this.STATE_OPENED;
			this.state = "opened";
		},

		close: function(e) {
			// this.state = this.STATE_CLOSED;
			this.state = "closed";
		},

		overHandler: function(e) {
			// console.log("overHandler: ", e);
			this.open();
		},

		outHandler: function(e) {
			// console.log("outHandler: ", e);
			if(this.auto) {
				this.close();
			}
		},

		// stateChanged: function() {
		// 	if (this.state === this.STATE_OPENED) {
		// 		_showClosePanel(this);
		// 	} else {
		// 		_hideClosePanel(this);
		// 	}
		// },

		// configurePanel: function() {
		// 	if(_currentInstance !== this) {
		// 		_setCurrentInstance(this);

		// 		var msgContent = this.querySelector('template').createInstance(this);
		// 		_closePanel.style.width = this.tipWidth ? this.tipWidth + "px" : "auto";
		// 		_closePanel.valign = this.valign;
		// 		_closePanel.align = this.align;
		// 		_closePanel.innerHTML = null;
		// 		_closePanel.appendChild(msgContent);
		// 		_closePanel.scope = this;
		// 		_closePanel.target = this.$.tipTarget;
		// 	}
		// }
	});

})(window.Strand = window.Strand || {});