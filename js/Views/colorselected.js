define([
    "backbone",
    "text!templates/colorselectedTemplate.html"
], function (Backbone, Templ) {
    var ColorSelectedView = Backbone.View.extend({
        initialize: function (options) {
            this.options = options;           
            _.bindAll(this, 'render'); // every function that uses 'this' as the current object should be in here
            this.render();
        },
        render: function () {
            var view = this;
            view.$el.html(_.template(Templ, {model:view.model}));
            return view;
        },
        events:{
          'click #closeSelection' : 'close'
        },
        close: function () {           
            var target = this.options.parentView;
            target.$('#colorwheel svg').css("pointer-events", "all");            
            this.remove();
        }
    });
    return ColorSelectedView;
});