define([
    "jquery",
    "underscore",
    "backbone",
    "backbonevalidation"
], function ($, _, Backbone, bbValid) {
     _.extend(bbValid.callbacks, {
        valid: function (view, attr, selector) {
            var $el = view.$('[name=' + attr + ']'),
                $group = $el.closest('.form-group');

            $group.removeClass('has-error');
            $('.' + attr + '-help-block').html('').addClass('hidden');
        },
        invalid: function (view, attr, error, selector) {
            var $el = view.$('[name=' + attr + ']'),
                $group = $el.closest('.form-group');

            $group.addClass('has-error');
            $('.' + attr + '-help-block').html(error).removeClass('hidden');
        }
    });
    var Contact = Backbone.Model.extend({
        urlRoot: "/svc/index.php/user/contact_us",
        defaults: {
            "name": "",
            "email": "",
            "message": ""
        },
        validation: {
            name: {
                required: true,
                pattern: /^[A-Za-z- ]+$/,
                msg: 'Please enter your name.'
            },
            email: {
                required: true,
                pattern: 'email',
                msg: 'Please enter a valid email address.'
            },
            message: {
                required: true,
                msg: 'Please enter your message.'
            },

            
        }
    });
    return Contact;
});