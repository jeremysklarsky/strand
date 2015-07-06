(function(scope) {

	scope.MenuPanel = Polymer({
		is: 'mm-menu-panel',

		behaviors: [
			StrandTraits.AutoClosable,
			StrandTraits.Stackable,
			StrandTraits.PositionableTip
		],
	});

})(window.Strand = window.Strand || {});