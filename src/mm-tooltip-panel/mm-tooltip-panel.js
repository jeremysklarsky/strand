(function(scope) {

	scope.TooltipPanel = Polymer({
		is: 'mm-tooltip-panel',

		behaviors: [
			StrandTraits.AutoClosable,
			StrandTraits.Stackable,
			StrandTraits.PositionableTip
		],

		properties: {
			
		},

		ready: function(){
			console.log("mm-tooltip-panel :: ready");
		}

	});

})(window.Strand = window.Strand || {});