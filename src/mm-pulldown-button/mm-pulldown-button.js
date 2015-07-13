/**
 * @license
 * Copyright (c) 2015 MediaMath Inc. All rights reserved.
 * This code may only be used under the BSD style license found at http://mediamath.github.io/strand/LICENSE.txt

*/
(function(scope) {

	var Rectangle = StrandLib.Rectangle;

	scope.PulldownButton = Polymer({

		is: 'mm-pulldown-button',

		properties: {
			scope: {
				type: Object,
				value: function() { return this; }
			},
			panel: {
				type: Object,
				value: function() { return undefined; }
			},
			target: {
				type: Object,
				value: function() { return this.$.target; }
			},
		},

		behaviors: [
			StrandTraits.AutoTogglable,
			StrandTraits.Dropdownable,
			StrandTraits.Stylable,
		],

		ready: function() {
			if(!this.toggleTrigger) {
				this.toggleTrigger = this.target;
			}
		},

		attached: function() {
			this.async(function() {
				var tmpl = this.$.panelTmpl;
				tmpl.templatize(tmpl);
				this.distributeContent();
				var frag = tmpl.stamp().root,
					panel = frag.getElementById('panel');
					items = Polymer.dom(this).children.filter(function(el) { return el.localName != 'label' && el.localName != 'mm-icon'; });
				for(var i=0; i<items.length; i++) {
					panel.$.container.appendChild(items[i]);
				}
				this.panel = panel;
			});
		},

		_updateButtonClass: function(direction, fitparent, error, state, type) {
			var o = {};
			o["button"] = true;
			o["fit"] = fitparent;
			o["invalid"] = error;
			o[type] = true;
			o[state] = true;
			o["top"] = (direction === 'n');
			o["bottom"] = (direction === 's');
			return this.classBlock(o);
		},

		open: function(silent) {
			this.state = this.STATE_OPENED;
			this.fire('panel-add', {context:this}, {node: document.body});
		},
	});

})(window.Strand = window.Strand || {});