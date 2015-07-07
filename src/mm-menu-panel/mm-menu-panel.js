(function(scope) {

	scope.MenuPanel = Polymer({
		is: 'mm-menu-panel',

		behaviors: [
			StrandTraits.AutoTogglable,
			StrandTraits.Stackable,
			StrandTraits.PositionableTip
		],
	});

})(window.Strand = window.Strand || {});