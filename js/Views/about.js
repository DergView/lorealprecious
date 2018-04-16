define([
    "backbone",
    "text!templates/aboutTemplate.html",
    "Views/navmenu",
    "Models/contact",
    "vent"
], function (Backbone, Templ, NavMenu,Contact,Vent) {
    var AboutView = Backbone.View.extend({
        initialize: function () {
            _.bindAll(this, 'render','contactUs','update'); // every function that uses 'this' as the current object should be in here            
            this.contactmodel = new Contact(); 
            this.render();            
            Backbone.Validation.bind(this, {
                model: this.contactmodel
            });
        },
        render: function () {
            var view = this,            
		mode = "scroll";
            view.$el.html(_.template(Templ));
	    
	        if(view.model.getLoggedInStatus()) {
		        mode = "route";
	        }
	    
	        view.$("#divNav").html(new NavMenu({model: view.model, mode: mode}).el);
            return view;
        },
	    events: {
	        //'click [data-action="navigate"]': 'scrollView',
	        'click [data-action="back"]': 'scrollTop',
	        'click [data-action="more"]': 'expandBox',
	        'click [data-action="close"]': 'contractBox',
	        'click #submit_contact' :'contactUs',
            'focus #contact_us_form input.input_full': 'update',
            'focus #contact_us_form textarea.input_full': 'update'

	    },
	    scrollView: function(event) {
	        // Scrolls the view to the div specified by the <a> data-target value
	        event.preventDefault();
	        var targetObj = $(event.target),
		    target = targetObj.data('target');
	        // Was having a problem with finding the target due to the
	        // multiple event points in the target divs. 
	        // This searches up depending on which location is clicked
	        while(target === undefined) {
		    targetObj = targetObj.parent();
		    target = targetObj.data('target');
	        }
	    
	        $.scrollTo($('#' + target), 600);
	    },
	    scrollTop: function(event) {
	        // Returns the user to the top of the page
	        event.preventDefault();
	        $.scrollTo('#header', 600);
	    },
	    expandBox: function(event) {
	        // Expands a hidden content box out
	        event.preventDefault();
	        var target = $(event.target).data('target');
	    
	        $('#' + target).slideDown(600);
	        $(event.target).fadeOut();
	        $.scrollTo($('#' + target).parent(), 600);
	    },
	    contractBox: function(event) {
	        // Shrinks the expanded box back to invisible
	        event.preventDefault();
	        var target = $(event.target).data('target');
	        $('#' + target).slideUp(600);
	        $('#' + target).parent().children('[data-action="more"]').fadeIn();
	        $.scrollTo($('#' + target).parent(), 600);
	    },
	    contactUs:function(event) {
		    event.preventDefault();
		    $("#contactCaptchaError").addClass("hidden");
		     var view = this;            
                event.preventDefault();
                var form = $(this.el).find('form#contact_us_form');
                var formData = {
                    name: form.find('#name').val(),              
                    email: form.find('#email').val(),
                    message:form.find('#message').val() 
                }
	        /*
                var challenge = Recaptcha.get_challenge();
                var response = Recaptcha.get_response();
                var capObj = {
                    "recaptcha_response_field": response,
                    "recaptcha_challenge_field": challenge
                }
                $.ajax({
                    url: '/user/captcha',
                    type: 'POST',
                    data: JSON.stringify(capObj),
                    dataType: 'json',
                    success: function (data) {*/
	        if($('#country').val().length < 1){
                        view.contactmodel.set(formData);
                        if (view.contactmodel.isValid(true)) {
                            view.contactmodel.save(formData, {
                                success: function () {
                                    Vent.trigger("showError", { title: "Successful Submission", msg: "Thank you! Your message was submitted." });
                                },
                                error: function (data) {

                                    $("#ContactError").show();
                                    $("#ContactError").css('visibility', 'visible');
                                }
                            });
                        }
                    } else {
                        $("#contactCaptchaError").removeClass("hidden");
                    }
	    },
        update : function(event) {   
                   
                var name = event.currentTarget.id;           
                $("." + name + '-help-block').html('').addClass('hidden');

	    }

        });
        return AboutView;
});