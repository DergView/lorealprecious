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
    var User = Backbone.Model.extend({
        urlRoot: '/svc/index.php/user',
        defaults: {
            id: "",
            user_id: "",
            permissions: "",
            id_no: "",
            name: "",
            email: "",
            surname: "",
            mobile: "",
	    dob: "",
            gender: "",
            street: "",
            suburb: "",
            city: "",
            province: "",
            code: "",
            unemployed: "",
            occupation: "",
            education: "",
            ethnic_group: "",
            language: "",
            has_internet: "",
            has_car: "",
            is_homeowner: "",
            has_insurance: "",
            is_parent: "",
            shopping_responsibility: "",
            breadwinner: "",
            people_in_household: "",
            dependants: "",
            personal_income: "",
            household_income: "",
            has_cellphone: "",
            has_dstv: "",
            has_domestic_workers: "",
            has_computer: "",
            has_medical_aid: "",
            is_gym_member: "",
            has_pets: "",
            has_cat: "",
            has_dog: "",
            has_bird: "",
            has_fish: "",
            has_other_pet: "",
            referrer: "",
            date_modified: "",
            work_status: "",
            manager_role: "",
            answered_business_panel: "",
            seniority_level: "",
            organization_size: "",
            version: ""
        },
        validation: {
	    id_no: {
                required: true,
                minLength: 13,
               // maxLength: 13,
                msg: 'Please enter your ID number'
            },
            name: {
                required: true,
                msg: 'Please enter your name'
            },
	    email: {
                required: true,
                pattern: 'email',
                msg: 'Please enter your email address'
            },
            surname: {
                required: true,
                msg: 'Please enter your surname'
            },
            mobile: {
                required: true,
                pattern: 'digits',
                minLength: 8,
                maxLength: 11,
                msg: 'Please enter your mobile number'
            },
	    gender: {
		required: true
	    },
            province: {
                required: true,
                msg: 'Please enter your province'
            },
	    work_status: {
		required: true
	    },
	    /*
	    unemployed: {
		required: true
	    },*/
	    education: {
		required: true
	    },
	    ethnic_group: {
		required: true
	    },
	    language: {
		required: true
	    },
	    has_internet: {
		required: true
	    },
	    has_car: {
		required: true
	    },
	    is_homeowner: {
		required: true
	    },
	    has_insurance: {
		required: true
	    },
	    is_parent: {
		required: true
	    },
	    shopping_responsibility: {
		required: true
	    },
	    breadwinner: {
		required: true
	    },
	    people_in_household: {
		required: true
	    },
	    dependants: {
		required: true
	    },
	    personal_income: {
		required: true
	    },
	    household_income: {
		required: true
	    },
	    has_cellphone: {
		required: true
	    },
	    has_dstv: {
		required: true
	    },
	    has_domestic_workers: {
		required: true
	    },
	    has_computer: {
		required: true
	    },
	    has_medical_aid: {
		required: true
	    },
	    is_gym_member: {
		required: true
	    },
	    has_pets: {
		required: true
	    }
        },
        checkLogin: function (email, password, rememberMe, currentUrl) {
            var loginObj = {
                "login": email,
                "password": password,
                "remember": rememberMe,
                "currentURL": currentUrl
            };
            var self = this;
            $.ajax({
                url: '/svc/index.php/auth/login',
                data: loginObj,
                type: 'post',
                dataType: 'json',
                success: function (data) {
                    self.set(data).done();
                },
                error: function (data) {
                    //Need to set an error message based on response.
                }
            });
        },
        checkUserLogin: function () {
           var self = this;
           return $.ajax({
                url: '/svc/index.php/user',
                type: 'GET',
                cache: false,
                dataType: 'json',
                success: function (data) {
                    self.set(data);
                },
                error: function (data) {
                    //Need to set an error message based on response.
                }
            });
        },
        getLoggedInStatus: function () {
            var self = this;
            var _id = self.get("id");
            if (_id && _id !== "") {
                return true;
            } else {
                return false;
            }
        }
    });
    return User;
});

