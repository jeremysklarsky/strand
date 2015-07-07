(function(scope) {

	scope.TooltipPanel = Polymer({
		is: 'mm-tooltip-panel',

		behaviors: [
			StrandTraits.AutoClosable,
			StrandTraits.Stackable,
			StrandTraits.PositionableTip,
			StrandTraits.Stylable
		],

		properties: {
			CLOSE_ICON_COLOR: {
				type: String,
				value: Colors.A4
			},
			CLOSE_ICON_HOVER: {
				type: String,
				value: Colors.F0
			}
		},

		_updateClass: function(autoClose) {
			var o = {};
			o.auto = !autoClose;
			return this.classBlock(o);
		},

		_closeFilter: function(instance, e, original) {
			var closeIcon = instance.$$(".close-icon");
			if(e.path.indexOf(closeIcon) > -1){
				instance.close();
			}
		}

	});

})(window.Strand = window.Strand || {});