(function(scope) {
	var DataUtils = StrandLib.DataUtils;

	scope.RepeaterRow = Polymer({
		is: 'strand-repeater-row',

		behaviors: [
			StrandTraits.LightDomGettable,
			StrandTraits.Stylable
		],

		properties: {
			model: {
				type: Object,
				notify: true,
				observer: '_modelChanged'
			},
			scope: {
				type: Object,
				notify: true
			},
			index: {
				type: Number
			},

			errors: {
				type: Array,
				value: false,
				notify: true
			},

			_shouldShowAddRow: {
				type: Boolean,
				computed: '_computeShouldShowAddRow(index, scope._last, scope.maxRows)',
				notify: true
			}
		},

		observers: [
			'_notifyModelChanged(model.*)'
		],

		_notifyModelChanged: function(changeRecord) {
			this.scope._notifyModelChanged(changeRecord);
		},

		_addRow: function() {
			this.scope.add();
		},

		_removeRow: function(ev) {
			this.scope.remove(this.index);
		},

		_computeContainerClass: function(index, last) {
			var o = {};
			o["container"] = true;
			o["has-bottom-margin"] = index !== last;
			return this.classBlock(o);
		},

		_computeShouldShowAddRow: function(index, last, maxRows) {
			return (index === last) && (maxRows ? last < maxRows-1 : true);
		},

		_computeErrorMessageStyle: function(record) {
			if(record.elt && record.elt instanceof HTMLElement) {
				var current = record.elt,
					prev = Polymer.dom(current).previousElementSibling,

					rowRect = this.getBoundingClientRect(),
					rect = current.getBoundingClientRect(),
					prevRect = prev ? prev.getBoundingClientRect() : null,

					width = rect.width,
					position = rect.left - rowRect.left,
					offset = prev ? (prevRect.right - rowRect.left) : 0,

					s = {
						left: (position-offset)+"px",
						width: width+"px"
					};

				return this.styleBlock(s);
			}
		},

		_validate: function(record) {
			var custom = DataUtils.isDef(record) && record.cId === this.model.cId;
			var elems = Array.prototype.slice.call( Polymer.dom(this).querySelectorAll('[name],[error]') )
			this.errors = elems
				.map(function(node) {
					var name = node.getAttribute('name');
					var message = custom ? record[name] : '';
					var error = node.error || !!message; // validatable has set the error state, or error message is present
					node.error = error;

					return {
						name: name,
						message: message,
						error: error,
						elt: node
					};
				})
				.filter(DataUtils.isDef);
				
			return this.errors.filter(function(o) { return o.error; }).length === 0;
		},

		_modelChanged: function(newModel) {
			this.scope._validation[newModel.cId] = this._validate.bind(this);
		}
	});
})(window.Strand = window.Strand || {});
