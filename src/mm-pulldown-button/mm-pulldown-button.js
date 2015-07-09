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
			target: {
				type: Object,
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
			overflow: {
				type: String,
				value: "hidden"
			},	
			type: {
				type: String,
				value: "primary"
			},
			direction: {
				type: String,
				value: "s",
			},
			disabled: {
				type: Boolean,
				value: false,
			},
			error: {
				type: Boolean,
				value: false,
			},
			fitparent: {
				type: Boolean,
				value: false
			},
			layout: String,
		},

		behaviors: [
			StrandTraits.AutoClosable,
			StrandTraits.Stylable,
		],

		_updateButtonClass: function(direction, fitparent, error, state, type) {
			console.log(direction);
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

		// PRIMARY_ICON_COLOR: Colors.D0,
		// SECONDARY_ICON_COLOR: Colors.A2,
		
		// domReady: function() {
		// 	// set icon layout default - is there an icon?
		// 	var iconColor = (this.type !== "primary") ? this.SECONDARY_ICON_COLOR : this.PRIMARY_ICON_COLOR;

		// 	if (this.icon.length) {
		// 		this.icon[0].primaryColor = iconColor;
		// 	}

		// 	this.$.caratIcon.primaryColor = iconColor;
		// 	this.async(this.btnWidthChanged);
		// },

		// attached: function() {
		// 	WindowNotifier.addInstance(this);
		// },

		// detached: function() {
		// 	WindowNotifier.removeInstance(this);
		// },

		// resize: function() {
		// 	this.job("resize", this.btnWidthChanged, 0);
		// },

		// btnWidthChanged: function() {
		// 	if (this.overflow === "visible") {
		// 		this.$.closePanel.style.width = "auto";
		// 		this.$.closePanel.style.minWidth = this.btnWidth + "px";
		// 	} else {
		// 		this.$.closePanel.style.width = this.btnWidth + "px";
		// 	}
		// },

		// get btnWidth() {
		// 	if (this.$)
		// 	return parseFloat(getComputedStyle(this.$.buttonMain).width);
		// },

		// get icon() {
		// 	var icon = Array.prototype.slice.call(this.$.icon.getDistributedNodes());
		// 	return icon.filter(function(item) { return item.nodeName !== "TEMPLATE"; });
		// },

		// open: function(e) {
		// 	this.state = this.STATE_OPENED;
		// },

		// close: function(e) {
		// 	this.state = this.STATE_CLOSED;
		// },

		// toggle: function(e) {
		// 	if (this.state === this.STATE_OPENED) {
		// 		this.state = this.STATE_CLOSED;
		// 	} else {
		// 		this.state = this.STATE_OPENED;
		// 	}
		// },

		// closeFilter: function(instance, event) {
		// 	if (event.target === this || event.target === this.$.buttonMain) {
		// 		event.preventDefault();
		// 	} else {
		// 		instance.fire('close');
		// 	}
		// }
	});

})(window.Strand = window.Strand || {});