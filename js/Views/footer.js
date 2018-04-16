define([
    "backbone",
    "text!templates/footerTemplate.html",
    "Views/terms",
    "Views/privacy",
    "jqueryui"

], function (Backbone, Templ, TermsView,PrivacyView) {
    var FooterView = Backbone.View.extend({
        initialize: function () {              
            _.bindAll(this, 'render','Terms','Privacy'); // every function that uses 'this' as the current object should be in here
            this.render();
        },
        render: function () {
            var view = this;
            view.$el.html(_.template(Templ));
            return view;
        },
        events: {
            'click #terms': 'Terms',
            'click #privacy': 'Privacy'    
        },
        Terms: function () {
            $("#main").append(new TermsView().el);
        },
        Privacy: function () {
            $("#main").append(new PrivacyView().el);
        },


    });
    return FooterView;
});