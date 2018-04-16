define([
    "backbone",
    "text!templates/loreallandingTemplate.html"
], function (Backbone, Templ) {
    var LandingView = Backbone.View.extend({
        initialize: function () {            
            _.bindAll(this, 'render'); // every function that uses 'this' as the current object should be in here
            this.render();
        },
        render: function () {
            var view = this;
            view.$el.html(_.template(Templ));
            return view;
        },
         events: {            
            'click #landingsubmit': 'moveToChoice'        

        },
        moveToChoice: function() {
            Backbone.history.navigate('choose', {trigger: true})
        }
    });
    return LandingView;
});