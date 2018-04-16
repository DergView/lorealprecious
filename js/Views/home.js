define([
    "backbone",
    "text!templates/homeTemplate.html"
], function (Backbone, Templ) {
    var HomeView = Backbone.View.extend({
        initialize: function () {
            _.bindAll(this, 'render'); // every function that uses 'this' as the current object should be in here
            this.render();
        },
        render: function () {
            var view = this;
            view.$el.html(_.template(Templ));
            return view;
        }
    });
    return HomeView;
});