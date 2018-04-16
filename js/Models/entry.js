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
            $('.' + attr + '-help-block').html(error).removeClass('hidden').addClass('show');
        }
    });
    var Entry = Backbone.Model.extend({
        urlRoot: " ",
        defaults: {
            "name": "",
            "surname": "",
            "phone": "",
            "email": "",
            "preciousmoment": "",
            "entrycount": "",
            "terms": ""
        },
        validation: {
            name: {
                required: true,
                pattern: /^[A-Za-z- ]+$/,
                msg: 'Please enter your name.'
            },
            surname: {
                required: true,
                pattern: /^[A-Za-z\-' ]+$/,
                msg: 'Please enter your surname.'
            },
            phone: {
                required: true,
                pattern: /^(\+27|27|0)\d{9}$/,
                msg: 'Please enter a valid cellphone number.'
            },

            email: {
                required: true,
                pattern: 'email',
                msg: 'Please enter a valid email address.'
            },
            preciousmoment: {
                required: true,
                pattern: /^[A-Za-z,\-,' ]+$/,
                msg: 'Please enter your message containing characters only.'

            },


        }
    });
    return Entry;
});