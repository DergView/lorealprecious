
define([
    "backbone"    
], function (Backbone) {
    var Router = Backbone.Router.extend({
        routes: {
            "": "Landing",           
            "thanks":"ThankYou",
            "upgrade":"BrowserUpgrade",
            "choose" : "DisplaySVG",
            "entry/:modelId": "DisplayForm"   
	    
        },
        assets:{},
        selectedmodel:{},        

        Landing: function () {           
             var that = this;
            require(["Views/landing","Views/footer"], function (LandingView,FooterView) {
                $("#main").html(new LandingView().el);
                $("#footer").html( new FooterView().el);
            });

        },      
	    
	    DisplayForm: function (modelId) {	        
	        var self = this;
	        var displaymodel = this.assets.get(modelId)
	        
	        require(["Views/entryform","Views/footer"], function (EntryFormView,FooterView) {   
            
	            $("#main").html(new EntryFormView({model:displaymodel}).el);
                 $("#footer").html( new FooterView().el);
              
        });
        },
        ThankYou:function() {
            var self = this;            
            require(["Views/thankyou","Views/footer"], function (ThanksView,FooterView) {
                $("#main").html(new ThanksView({model:Router.selectedmodel}).el);
                $("#footer").html( new FooterView().el);
            });

        },
        /*ColourChoice:function() {
            var that = this;
            _Desktop = true;
            _Device.ipad = false;
            _Device.galaxyTab1 = false;
            _Device.galaxyTab2 = false;

                                    
            if(_Desktop || _Device.ipad || _Device.galaxyTab1 || _Device.galaxyTab2){       
                require(["Views/colorwheel", "Views/footer"], function (ColorwheelView, FooterView) {                   
                    $("#main").html(new ColorwheelView({ collection: that.assets }).el);
                $("#footer").html( new FooterView().el);
            });
        } else {
            require(["Views/accordion","Views/footer"], function (AccordionView,FooterView) {
                $("#main").html(new AccordionView({collection:that.assets}).el);
                $("#footer").html( new FooterView().el);
            });
        }

        }, */      
	    Message: function () {
	        var that = this;
	        require(["Views/message"], function (MessageView) {
	            $('#main').html(new MessageView({ title: 'Whoops', message: 'There was a problem with your account, <br/>please try to login again <a href="#login">Go to Login</a>' }).el);
	        });
	    },
        Home: function () {
           
            var that = this;
            require(["Views/home",], function (HomeView) {
                $("#main").html(new HomeView({}).el);
		       
            });
        },       
        BrowserUpgrade: function(){
            var that = this;
            require(["Views/message"], function (MessageView) {
                $('#main').html(new MessageView({ title: 'Whoops', message: 'We have detected you are on an outdated browser, <br/> for best viewing of this site, we suggest you update your browser. <p> <a href="http://www.browsehappy.com">Upgrade Browser Here</a></p>' }).el);
            });

        },
        DisplaySVG: function () {
            var that = this;
            //_Desktop = false;

            if (_Desktop) {
                require(["Views/svgcolorwheel", "Views/footer"], function (SVGColorwheelView, FooterView) {
                    $("#main").html(new SVGColorwheelView({ collection: that.assets }).el);
                    $("#footer").html(new FooterView().el);
                });
            } else {
                require(["Views/accordion", "Views/footer"], function (AccordionView, FooterView) {
                    $("#main").html(new AccordionView({ collection: that.assets }).el);
                    $("#footer").html(new FooterView().el);
                });
            }
        }
    });
    return Router;
});