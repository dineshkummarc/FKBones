define([
	'libs/backbone',
	'libs/hbt!templates/my_template.html'
], function(Backbone, MyTemplate){
	var Fandom = Backbone.View.extend({
		tagName: 'div',
		className: 'block',
		initialize: function() {
			this.model.bind('change:motto', this.render, this);
			this.render();
		},
		render: function() {
			this.$el.html(MyTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			'ajax:error a': 'ajaxError'
		},
		ajaxError: function() {
			this.model.set({'motto': '(dealwithit)'});
		}
	});
	return Fandom;
});