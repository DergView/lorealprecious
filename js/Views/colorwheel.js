define([
    "backbone",
    "text!templates/colorwheelTemplate.html",
    "jquery",
    "Views/colorselected"
], function (Backbone, Templ, $,ColorSelectedView) {
    var ColorwheelView = Backbone.View.extend({
        initialize: function () {
            $(document).tooltip({
                track: true
            });            

            _.bindAll(this, 'render', 'CreateWheel', 'ConfirmChoice', 'ConfirmColor'); // every function that uses 'this' as the current object should be in here
            this.on('render', this.CreateWheel);
            this.render();           

        },
        render: function () {
            var view = this;
            view.$el.html(_.template(Templ));
            this.trigger('render');      
          
            return view;
        },
        events: {            
            'render': 'CreateWheel',
            'click span': 'ConfirmChoice'            

        },
        CreateWheel: function () {
            var self = this;

            
            

            /*var colors = ["#232424",
                "#373636",
                "#3b3837",
                "#3d2a1f",
                "#524439",
                "#5f5855",
                "#5c4b40",
                "#705748",
                "#7e5d52",
                "#796358",
                "#816755",
                "#8f7559",
                "#8d796e",
                "#ab8a75",
                "#773f3b",
                "#6a3f43",
                "#7f4b4d",
                "#916964",
                "#947c6d",
                "#9a846d",
                "#ab8a6d",
                "#ae946e",
                "#a89479",
                "#d1b89e",
                "#d5bfa5",
                "#cdc4b1",
                "#d9cdb5"
                ];*/


/*for (var i=0; i<27; i++) {    

            var color = document.createElement("span");
            var rotatevalue = 266.66 - (i * 13.33);            
            color.setAttribute("id", "d" + i)           
            color.style.backgroundColor = colors[i]
            color.style.msTransform = "rotate(" + rotatevalue + "deg)"           
            color.style.webkitTransform = "rotate(" + rotatevalue + "deg)"
            color.style.MozTransform = "rotate(" + rotatevalue + "deg)"
            color.style.OTransform = "rotate(" + rotatevalue + "deg)"
            color.style.transform = "rotate(" + rotatevalue + "deg)"
            //document.getElementById('colorwheel').appendChild(color)
            this.$('#colorwheel').append(color);
            
};*/

            _.each(this.collection.models, function (asset,index) {           

            var color = document.createElement("span");
            var rotatevalue = 266.66 - (index * 13.33);
            color.setAttribute("id", asset.get('AssetId'))
            color.style.backgroundColor = asset.get('colourcode')
            color.style.msTransform = "rotate(" + rotatevalue + "deg)"
            color.style.webkitTransform = "rotate(" + rotatevalue + "deg)"
            color.style.MozTransform = "rotate(" + rotatevalue + "deg)"
            color.style.OTransform = "rotate(" + rotatevalue + "deg)"
            color.style.transform = "rotate(" + rotatevalue + "deg)"           
            self.$('#colorwheel').append(color);
            });
        

        },
        ConfirmChoice: function (event) {
            var self = this;
            console.log(self);
                     
            var selectedmodel = this.collection.get(event.currentTarget.id);
            $('#colorwheel span').css("pointer-events", "none");
          
           // $('#colorwheel').append(new ColorSelectedView({model:selectedmodel}).el);  
            setTimeout(function () { $('#colorwheel').append(new ColorSelectedView({ model: selectedmodel, parentView: self }).el), 0 });


        },
        ConfirmColor: function (event) {
            Backbone.history.navigate('entry/' + event.currentTarget.id, { trigger: true });
            window.location.hash('entry/' + event.currentTarget.id);

        }       


    });
    return ColorwheelView;
});