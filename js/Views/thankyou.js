define([
    "backbone",
    "text!templates/thankyouTemplate.html"
    
], function (Backbone, Templ) {
    var ThankYouView = Backbone.View.extend({
        initialize: function () {                      
            _.bindAll(this,'render'); // every function that uses 'this' as the current object should be in here
            this.render();
        },
        render: function () {
            var view = this;
            view.$el.html(_.template(Templ,{ model: view.model }));
            return view;
        },
        events: {
            'click #facebookshare': 'Share'
        },
        Share: function () {
            FB.ui({
                app_id: 427395467363924,
                method: 'feed',
                link: 'https://lorealpreciousstones.justdigit.al/',
                picture: 'Picture to be displayed',
                description: 'Enter your details, share your precious moment and stand a chance to win your choice of bracelet',
                caption: 'Competition text to be added'
            }, function (response) {
                if (response && response.post_id) {
                    console.log('Post was published.');
                    // Increase entry count by 5 - PUT to Joel's Endpoint
                } else {
                    console.log('Post was not published.');
                    // Return to homepage??
                }

            });
        }
    });
    return ThankYouView;
});