define([
    "backbone",
    "text!templates/entryFormTemplate.html",
     "Models/entry",
     "router"
      
], function (Backbone,Templ, Entry,lorealRouter) {
    var EntryFormView = Backbone.View.extend({
        initialize: function () {              
            _.bindAll(this, 'render','Enter','CountCharacters'); // every function that uses 'this' as the current object should be in here
            this.entrymodel = new Entry();  
            lorealRouter.selectedmodel = this.model;         
            this.render();
            Backbone.Validation.bind(this, {
                model: this.entrymodel
            });
        },
        render: function () {
            var view = this;
            view.$el.html(_.template(Templ, { model: view.model }));
            
            return view;
        },
        events:{
            'click #backEntryForm': 'PreviousStep',
            'click #submitEntryForm': 'Enter',
            'change #entrydetails input.input_full': 'Update',
            'change #entrydetails textarea.input_full': 'Update',            
            'keyup #preciousmoment': 'CountCharacters'
        },
        PreviousStep: function () {
            
            window.history.back();
        },
        Enter: function (event) {
            var view = this;
            event.preventDefault();
            var form = $(this.el).find('form#entrydetails');
            var terms = "";
            if ($('#entrytcs').is(':checked')) {
                terms = true;
            } else {
                terms = false;
            }


            var formData = {
                name: form.find('#name').val(),
                surname: form.find('#surname').val(),
                phone: form.find('#phone').val(),
                email: form.find('#email').val(),
                preciousmoment: form.find('#preciousmoment').val(),
                entrycount: form.find('#entrycount').val(),
                productId: form.find('#productId').val(),
                terms : terms
            }   

             Backbone.history.navigate("thanks",true);         
           /* This needs to be commented in for live version*/
            /*if ($('#entrytcs').is(':checked')) {
                view.entrymodel.set(formData);

                if (view.entrymodel.isValid(true)) {
                    view.entrymodel.save(formData, {
                        success: function () {                            
                            Backbone.history.navigate("thanks",true);
                        },
                        error: function (data) {

                            $("#ContactError").show();
                            $("#ContactError").css('visibility', 'visible');
                        }
                    });
                }
            } else {
                alert("Terms and Conditions need to be agreed to");
                //$("#entrytcsError").show();
            }*/
        },
        Update: function (event) {

            var name = event.currentTarget.id;
            $("." + name + '-help-block').html('').addClass('hidden');
            $("." + name + '-help-block').removeClass('show');


        },
        CountCharacters: function () {            
        var CharLength = 140;
        chars = $('#preciousmoment').val().length;        
        var newCount = CharLength - chars + " Characters Remaining";
        $('#lblcount').html(newCount);
     if (chars > CharLength) {
         $('#preciousmoment').val() = $('#preciousmoment').val().substring(0, CharLength);
     }
        }
    });
    return EntryFormView;
});