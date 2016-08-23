/**
 * @license
 * Copyright (c) 2015 MediaMath Inc. All rights reserved.
 * This code may only be used under the BSD style license found at http://mediamath.github.io/strand/LICENSE.txt

*/
(function(scope) {

	scope.GridItem = Polymer({
		is: 'strand-grid-item',

		behaviors: [
			StrandTraits.Refable
		],

		properties: {
			model: {
				type: Object,
				value: null
			},
			scope: Object,
			_overridden: {
				type: Object,
				value: function () {
					return {};
				},
			},
			_isAttached: {
				type: Boolean,
				value: false,
			},
		},

		observers: [
			"_expansionChanged(model.expanded)",
		],

		attached: function () {
			this._isAttached = true;
		},

		detached: function () {
			this._isAttached = false;
		},

		_expansionChanged: function (expanded) {
			this.toggleClass("expanded", !!expanded, this.$.carat);
		},

		_attachedFilter: function (columns, _isAttached) {
			if (_isAttached) {
				this.async(this.distributeContent);
				return columns;
			} else {
				return null;
			}
		},

		_checkDistributedNodesAsync: function(e) {
			if (this._isAttached) {
				this.debounce("checkDistributedNodes", this._checkDistributedNodes);
			}
		},

		_checkDistributedNodes: function () {
			var contents = Polymer.dom(this.$.columnContainer).querySelectorAll("content");
			var count = contents.length;
			var index = 0;
			var c = null;

			for (index = 0; index < count; index++) {
				c = contents[index];
				if (Polymer.dom(c).getDistributedNodes().length) {
					this.set("_overridden."+c.id, 0|true);
				}
			}
		},

		_isOverridden: function (field) {
			return this._overridden[field];
		},

		_columnContentSelector: function (field) {
			return "[field='"+field+"']";
		},

		_computeColumnValue: function(field, model, modelChange) {
			return model ? model[field] : "";
		},

		_computeColumnClass: function (alignColumn) {
			return "_mm_column " + (alignColumn || "");
		},

		_computeColumnStyle: function(value) {
			return 'width: ' + value;
		},

		_onItemSelected: function(e, detail, sender) {
			e.stopImmediatePropagation();
			this.fire("item-selected", this.model);
		},

		_onItemExpanded: function(e, detail, sender) {
			e.stopImmediatePropagation();
			this.set("model.expanded", !this.model.expanded);
			this.async(function () {
				this.fire("item-resized", this.model.expanded);
			});
		}
	});

})(window.Strand = window.Strand || {});
