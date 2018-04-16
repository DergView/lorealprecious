define([
    "backbone",
    "text!templates/termsTemplate.html"
], function (Backbone, Templ) {
    var TermsView = Backbone.View.extend({
        initialize: function () {
            var self = this;

            _.bindAll(this, 'render', 'CreateTermsDialog'); // every function that uses 'this' as the current object should be in here
            this.on('render', this.CreateTermsDialog);
            this.render();

        },
        render: function () {
            var view = this;
            view.$el.html(_.template(Templ));
            setTimeout(function () { view.trigger('render') }, 0);            

            return view;
        },

        events: {
            'render': 'CreateTermsDialog'

        },
        CreateTermsDialog: function () {

            $("#termsholder").dialog({
                modal: true,
                buttons: {
                    Ok: function () {
                        $(this).dialog("close");
                        $(this).remove();
                    }
                }
            });
           
        }
    });
    return TermsView;
});