define([
    "backbone",
    "text!templates/privacyTemplate.html"
], function (Backbone, Templ) {
    var PrivacyView = Backbone.View.extend({
        initialize: function () {
            var self = this;

            _.bindAll(this, 'render', 'CreatePrivacyDialog'); // every function that uses 'this' as the current object should be in here
            this.on('render', this.CreatePrivacyDialog);
            this.render();

        },
        render: function () {
            var view = this;
            view.$el.html(_.template(Templ));
            setTimeout(function () { view.trigger('render') }, 0);
            //view.trigger('render');

            return view;
        },

        events: {
            'render': 'CreatePrivacyDialog'

        },
        CreatePrivacyDialog: function () {

            $("#privacyholder").dialog({
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
    return PrivacyView;
});