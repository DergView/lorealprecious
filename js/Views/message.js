define([
   "backbone",
   "text!templates/messageTemplate.html",
  
], function(Backbone, Templ){
    var Message = Backbone.View.extend({
	initialize: function(options){
	    this.title = options.title;
	    this.message = options.message;
	    this.render();
	},
	render: function(){
	    var view = this;
	    view.$el.html(_.template(Templ, {title: view.title, message: view.message}));	   
	    return this;
	}
    });

    return Message;
   
});


