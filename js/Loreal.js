define([
    "backbone",
    "router",  
    "Views/footer",
    "Collection/lorealassets"
], function (Backbone, Router,FooterView,lorealassets) {
    /*Backbone.Validation.configure({
	    forceUpdate: true
    });*/
   
    var App = {
        initialise: function () {           
           
		var ua = navigator.userAgent;    
            
		var lorealRouter = new Router();

        /* Original Site Content */
		/*siteassets = new lorealassets();
		siteassets.fetch({
		    success: function () {		        
		        lorealRouter.assets = siteassets;		       
		        Backbone.history.start();
		    }
		});	*/

/* This to be removed once API is accessible */
var sitecolours = [{"ColourKey":1,"AssetId":"e5aa4fa5-5dbd-4c80-95a4-c7e3ea298e17","Colourname":"1 Black","imgSrc":"images/black/1_black.png","braceletSrc":"images/bracelet_black.png","colourcode":"#232424","colourfamily":"Black","braceletname":"Black Diamond Onyx Stone"},{"ColourKey":2,"AssetId":"34f83d50-9daf-4362-b2c8-3426d353cf9b","Colourname":"2 Natural Black","imgSrc":"images/brunette/2_natural_black.png","braceletSrc":"images/bracelet_brown.png","colourcode":"#373636","colourfamily":"Brown","braceletname":"Amber Smoky Quartz Stone"},{"ColourKey":3,"AssetId":"ec967e24-4144-48c8-bf88-8894a9f129a6","Colourname":"3 Natural Darkest Brown","imgSrc":"images/brunette/3_natural_darkest_brown.png","braceletSrc":"images/bracelet_brown.png","colourcode":"#4d4440","colourfamily":"Brown","braceletname":"Amber Smoky Quartz Stone"},{"ColourKey":4,"AssetId":"f05b5b22-9b47-42bb-8bc6-fe1808c6cad0","Colourname":"4 Natural Dark Brown","imgSrc":"images/brunette/4_natural_dark_brown.png","braceletSrc":"images/bracelet_brown.png","colourcode":"#2d2b2b","colourfamily":"Brown","braceletname":"Amber Smoky Quartz Stone"},{"ColourKey":5,"AssetId":"907321ae-eb8f-4d71-ba7c-f82f0d53cd66","Colourname":"4.15 Natural Dark Frosted Brown","imgSrc":"images/brunette/4_15_natural_dark_frosted_brown.png","braceletSrc":"images/bracelet_brown.png","colourcode":"#40342c","colourfamily":"Brown","braceletname":"Amber Smoky Quartz Stone"},{"ColourKey":6,"AssetId":"870ce931-506f-449c-8fb5-e4dc1ac11935","Colourname":"4.3 Natural Dark Golden Brown","imgSrc":"images/brunette/4_3_natural_dark_golden_brown.png","braceletSrc":"images/bracelet_brown.png","colourcode":"#5d4235","colourfamily":"Brown","braceletname":"Amber Smoky Quartz Stone"},{"ColourKey":7,"AssetId":"929ea953-8113-48cc-b49b-9c5415f2ca1c","Colourname":"5 Natural Brown","imgSrc":"images/brunette/5_natural_brown.png","braceletSrc":"images/bracelet_brown.png","colourcode":"#7a655a","colourfamily":"Brown","braceletname":"Amber Smoky Quartz Stone"},{"ColourKey":8,"AssetId":"c107f837-3dd1-4042-9a1c-867fe5b0239e","Colourname":"5.15 Natural Iced Brown","imgSrc":"images/brunette/5_15_natural_iced_brown.png","braceletSrc":"images/bracelet_brown.png","colourcode":"#30221d","colourfamily":"Brown","braceletname":"Amber Smoky Quartz Stone"},{"ColourKey":9,"AssetId":"e6b4b76f-07f6-4746-8c99-2e2dbf8a8df4","Colourname":"5.3 Natural Golden Brown","imgSrc":"images/brunette/5_3_natural_golden_brown.png","braceletSrc":"images/bracelet_brown.png","colourcode":"#6d533f","colourfamily":"Brown","braceletname":"Amber Smoky Quartz Stone"},{"ColourKey":10,"AssetId":"dad478b8-e530-4ab2-8465-866ba028bc07","Colourname":"5.35 Mousse Chocolate Brown","imgSrc":"images/brunette/5_35_chocolate_brown.png","braceletSrc":"images/bracelet_brown.png","colourcode":"#655043","colourfamily":"Brown","braceletname":"Amber Smoky Quartz Stone"},{"ColourKey":11,"AssetId":"d57bfa0d-d607-4823-aedf-10fdd019aa18","Colourname":"6.13 Natural Light Forsted Brown","imgSrc":"images/brunette/6_13_natural_light_frosted_brown.png","braceletSrc":"images/bracelet_brown.png","colourcode":"#7d6344","colourfamily":"Brown","braceletname":"Amber Smoky Quartz Stone"},{"ColourKey":12,"AssetId":"05d02171-956b-4548-aa56-eae8aceb03d7","Colourname":"6.3 Light Golden Brown","imgSrc":"images/brunette/6_3_natural_light_golden_blonde.png","braceletSrc":"images/bracelet_brown.png","colourcode":"#9c7758","colourfamily":"Brown","braceletname":"Amber Smoky Quartz Stone"},{"ColourKey":13,"AssetId":"7a4031dd-2349-4109-98be-f935054266f5","Colourname":"6.41 Natural Hazelnut","imgSrc":"images/brunette/6_41_natural_hazelnut.png","braceletSrc":"images/bracelet_brown.png","colourcode":"#9b7560","colourfamily":"Brown","braceletname":"Amber Smoky Quartz Stone"},{"ColourKey":14,"AssetId":"d3bc7a2b-8625-4c60-a986-3711b373d852","Colourname":"3.61 Mousse Black Cherry","imgSrc":"images/red/3_61_black_cherry_brown.png","braceletSrc":"images/bracelet_red.png","colourcode":"#582f32","colourfamily":"Red","braceletname":"Ruby Garnet Stone"},{"ColourKey":15,"AssetId":"f8f7dc19-1df1-4566-b0e5-870dbe3ee1e6","Colourname":"4.54 Natural Dark Copper Mahogany","imgSrc":"images/red/4_54_natural_dark_copper_mahogany.png","braceletSrc":"images/bracelet_red.png","colourcode":"#6b483d","colourfamily":"Red","braceletname":"Ruby Garnet Stone"},{"ColourKey":16,"AssetId":"af6fdd65-5c34-4a62-aef5-b8bf2082b05c","Colourname":"5.5 Natural Mahogany Brown","imgSrc":"images/red/5_5_natural_mahogany_brown.png","braceletSrc":"images/bracelet_red.png","colourcode":"#56433b","colourfamily":"Red","braceletname":"Ruby Garnet Stone"},{"ColourKey":17,"AssetId":"52677548-78eb-4f2b-ab14-67231d8a3259","Colourname":"5.62 Radiant Auburn","imgSrc":"images/red/5_62_natural_auburn.png","braceletSrc":"images/bracelet_red.png","colourcode":"#7e534d","colourfamily":"Red","braceletname":"Ruby Garnet Stone"},{"ColourKey":18,"AssetId":"fb2fd5a5-3ff5-471a-a4f2-8104c7e7d79f","Colourname":"6.66 Intense Red","imgSrc":"images/red/6_66_intense_red.png","braceletSrc":"images/bracelet_red.png","colourcode":"#6c3539","colourfamily":"Red","braceletname":"Ruby Garnet Stone"},{"ColourKey":19,"AssetId":"2c2b6dc5-88a9-454f-92c6-b52a5715b310","Colourname":"5.65 True Red","imgSrc":"images/red/5_65_true_red.png","braceletSrc":"images/bracelet_red.png","colourcode":"#642d2b","colourfamily":"Red","braceletname":"Ruby Garnet Stone"},{"ColourKey":20,"AssetId":"74c99b01-9e08-4a1d-977f-71ce7008ddd3","Colourname":"7 Natural Dark Blonde","imgSrc":"images/blonde/7_natural_dark_blonde.png","braceletSrc":"images/bracelet_blonde.png","colourcode":"#836757","colourfamily":"Blonde","braceletname":"Yellow Topaz Citrine Stone"},{"ColourKey":21,"AssetId":"84b4446b-0021-41d4-a895-9cc0c4de49d6","Colourname":"7.31 Natural Dark Caramel Blonde ","imgSrc":"images/blonde/7_31_natural_dark_caramel_blonde.png","braceletSrc":"images/bracelet_blonde.png","colourcode":"#8a7158","colourfamily":"Blonde","braceletname":"Yellow Topaz Citrine Stone"},{"ColourKey":22,"AssetId":"3bd5604d-4bf1-4548-87c2-3df703a7a22f","Colourname":"8 Natural Blonde","imgSrc":"images/blonde/8_natural_blonde.png","braceletSrc":"images/bracelet_blonde.png","colourcode":"#998465","colourfamily":"Blonde","braceletname":"Yellow Topaz Citrine Stone"},{"ColourKey":23,"AssetId":"1ce5ff40-a2fe-4ebd-bdb9-16e38cfaefb7","Colourname":"8.13 Natural Frosted Blonde ","imgSrc":"images/blonde/8_13_natural_frosted_blonde.png","braceletSrc":"images/bracelet_blonde.png","colourcode":"#c6a98a","colourfamily":"Blonde","braceletname":"Yellow Topaz Citrine Stone"},{"ColourKey":24,"AssetId":"5f422705-a74c-46f7-9761-13882cc05ba6","Colourname":"8.3 Natural Golden Blonde","imgSrc":"images/blonde/8_3_natural_golden_blonde.png","braceletSrc":"images/bracelet_blonde.png","colourcode":"#cbb192","colourfamily":"Blonde","braceletname":"Yellow Topaz Citrine Stone"},{"ColourKey":25,"AssetId":"38bc2b20-0420-46ca-be6d-c49f83986a97","Colourname":"9 Natural Light Blonde","imgSrc":"images/blonde/9_natural_light_blonde.png","braceletSrc":"images/bracelet_blonde.png","colourcode":"#a0845a","colourfamily":"Blonde","braceletname":"Yellow Topaz Citrine Stone"},{"ColourKey":26,"AssetId":"4ef8d79f-48a7-451b-b9fe-90d805821d31","Colourname":"9.1 Natural Light Ash Blonde","imgSrc":"images/blonde/9_1_natural_light_ash_blonde.png","braceletSrc":"images/bracelet_blonde.png","colourcode":"#d0c2a6","colourfamily":"Blonde","braceletname":"Yellow Topaz Citrine Stone"},{"ColourKey":27,"AssetId":"bfe9cc48-3f93-4bb0-8714-3f7ff9a8de87","Colourname":"10 Natural Baby Blonde ","imgSrc":"images/blonde/10_natural_baby_blonde.png","braceletSrc":"images/bracelet_blonde.png","colourcode":"#c4b9a2","colourfamily":"Blonde","braceletname":"Yellow Topaz Citrine Stone"}]
siteassets = new lorealassets(sitecolours);
lorealRouter.assets = siteassets;   
Backbone.history.start();

/* End of section to be removed */
        

        //$('#footer').html(new FooterView().el);
		
            if(_Browser.ie8 === true) {
                window.location.hash = "#upgrade";
            }

            if (ua.indexOf("BlackBerry") >= 0)
            {
              if (ua.indexOf("MIDP") >= 0)
                {
                   window.location.hash = "#upgrade";
                }
            }
        }/*,
        
	    showError: function(message) {
	        require(["Views/message"], function (MessageView) {
	            $('#main').html(new MessageView({model: user, title: message.title, message: message.msg }).el);
	        });
	    },
        cashoutSuccess: function(message) {
            require(["Views/message"], function (MessageView) {
                $('#main').html(new MessageView({ model: user, title: message.title, message: message.msg }).el);
            });
        },
	registerUser: function (updatedUser) {
	    user.set(updatedUser.toJSON());
		Backbone.history.navigate('dashboard/edit_your_profile', {trigger: true})
	    //App.showError({ title: 'Success', msg: 'Your Answered account has been created.' });
	},*/
	
    }
    /*Vent.on("LogInUser", App.updateUser);
    Vent.on("RegisterUser", App.registerUser);
    Vent.on("cashoutSuccess", App.cashoutSuccess);
    Vent.on("showError", App.showError);
    Vent.on("updatePoints", App.updatePoints);
    Vent.on("logoutUser", App.logoutUser);*/
    return App;
});