define([
    "backbone",
    "text!templates/accordionTemplate.html"    
], function (Backbone, Templ) {
    var AccordionView = Backbone.View.extend({
        initialize: function () {               
            
            _.bindAll(this, 'render','CreateAccordion','SelectColour'); // every function that uses 'this' as the current object should be in here
            this.on('render', this.CreateAccordion);
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
            'render': 'CreateAccordion',
            'click .ui-accordion-content div':'SelectColour'

        },
        CreateAccordion: function () {            
            var icons = {
                header: "ui-icon-circle-arrow-e",
                activeHeader: "ui-icon-circle-arrow-s"
            };
            $("#accordion").accordion({
                icons: icons,
                collapsible: true
            });
            /*$("#toggle").button().click(function () {
                if ($("#accordion").accordion("option", "icons")) {
                    $("#accordion").accordion("option", "icons", null);
                } else {
                    $("#accordion").accordion("option", "icons", icons);
                }
            });*/

            
        },
        SelectColour: function(event) {
            
            var target = event.currentTarget.childNodes[0].innerHTML;

            var match = _.filter(this.collection.models, function (colour) {               
                return target === colour.get('Colourname');
           })
           
           var result = match[0].attributes.AssetId;       
          
           window.location.hash = 'entry/' + result;        
        }
    });
    return AccordionView;
});