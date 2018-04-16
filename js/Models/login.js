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
    var Login = Backbone.Model.extend ({
        urlRoot: '/svc/index.php/auth/login',
        defaults: {
            id: "",
            email: "",
	        password: "",
	        remember: "0"
        },
        validation: {
            email: {
                required: true,
                pattern: 'email',
                msg: 'Please enter your email address'
            },
	        password: {
		        required: true,
		        msg: 'Please enter your password'
	        }
        }
    });
    return Login;
});

