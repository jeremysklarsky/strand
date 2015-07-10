(function(scope) {

	scope.PanelLayer = Polymer({
		is: 'mm-panel-layer',

		properties: {
			panels: {
				type: Object,
				value: function() { return new WeakMap(); }
			}
		},

		open: function(context,tmpl) {
			if( !this.panels.has(tmpl) ) {
				var frag = tmpl.stamp({model:"data"}).root;
				var content = document.importNode(tmpl.content,true),
					panel = document.createElement('mm-pulldown-panel');
				panel.$.container.appendChild(frag);
				panel.target = context.target;
				this.appendChild(panel);
				this.panels.set(tmpl,panel);

				panel.addEventListener("close", function() { context.state = "closed"; });
				panel.addEventListener("open", function() { context.state = "opened"; });
			} else {
				var panel = this.panels.get(tmpl);
			}
			panel.open();
		},

		close: function(context,tmpl) {
			if(this.panels.has(tmpl)) {
				var panel = this.panels.get(tmpl);
				panel.close();
			}
		}

	});

})(window.Strand = window.Strand || {});