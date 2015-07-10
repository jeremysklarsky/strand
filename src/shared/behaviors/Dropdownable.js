(function (scope) {
	
	var Dropdownable = {
		properties: {
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
		}
	}

	scope.Dropdownable = Dropdownable;

	// scope.Dropdownable = [
	// 	scope.AutoClosable,
	// 	Dropdownable
	// ]

})(window.StrandTraits = window.StrandTraits || {}); 