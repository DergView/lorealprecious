define([
    "backbone",
    "text!templates/svgcolorwheelTemplate.html",
    "jquery",
    "Views/colorselected",
    "raphael",
    "raphaelpie"
], function (Backbone, Templ, $,ColorSelectedView,Raphael,Raphaelpie) {
    var svgColorWheelView = Backbone.View.extend({

        initialize: function () {   
            self = this;

            _.bindAll(this, 'render'); // every function that uses 'this' as the current object should be in here
            //this.on('render', this.CreateWheel);
            this.render();

            var values = [],
           labels = [],
           colours = [],
           colourids = [],
           sectorsize = 3.5;           
            
            _.each(this.collection.models, function(asset){
                var currentcolour = asset.get('colourcode');
                var currentid = asset.get('AssetId');
                colours.push(currentcolour)
                values.push(sectorsize);
                colourids.push(currentid);
            });

                   
           
            setTimeout(function () {Raphael("colorwheel", 451, 451).pieChart(225.5, 225.5, 225.5, values, "#fff",colours,colourids)},0); 


        },
        render: function () {
            var view = this;
            view.$el.html(_.template(Templ));
           // this.trigger('render');

            return view;
        },
        events: {
            'render': 'CreateWheel',
            'click svg': 'ConfirmChoice'

        },

        ConfirmChoice: function (event) {
            var self = this;

            var selectedmodel = this.collection.get(event.target.id);
            $('#colorwheel svg').css("pointer-events", "none");

            setTimeout(function () { $('#colorwheel').append(new ColorSelectedView({ model: selectedmodel, parentView: self }).el), 0 });
        }

    });

    return svgColorWheelView;
});