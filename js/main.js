require.config({
    paths: {
        templates: "../content/templates",
        jquery: "Library/jquery-1.10.2.min",
        underscore: "Library/underscore",
        backbone: "Library/backbone-min",
        bootstrap: "Library/bootstrap.min",
        text: "Library/text",
	scrollTo: "Library/jquery-scrollTo.min",
	modernizr: "Library/modernizr-2.6.2-respond-1.1.0.min",
	backbonevalidation: "Library/backbone-validation-amd-min",
	jcarousel: "Library/jquery.jcarousel",
	facebook: "//connect.facebook.net/en_US/all",
	jqvalidate: "Library/jquery.validate.min",
	jqueryui: "//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min",
	raphael: "Library/raphael",
    raphaelpie: "Library/raphaelpie"
	
    },
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
	    scrollTo: {
	        deps: ["jquery"],
	        exports: "$"
	    },
	    jcarousel: {
	        deps: ["jquery"],
	        exports: "$"
	    },
	    jcarouselResponsive: {
	        deps: ["jquery"],
	        exports: "$"
	    },
	    facebook: {
	        exports: 'FB'
	    },
	    jqvalidate:{
	    	deps: ["jquery"],
	        exports: "$"
	    },
	    jqueryui: {
	        deps: ["jquery"],
	        exports: "$"
	    },
	    raphaelpie: {
	        deps: ["raphael"],
	        exports: "pie"
	    }

    }
});
require(["Loreal"], function (Loreal) {
    Loreal.initialise();
});

/*require(["raphael","raphaelpie"], function (Raphael,Raphaelpie) {
    console.log(Raphael);
    console.log(Raphaelpie);
});*/

require(['facebook'], function (FB) {
    FB.init({
        appId: '427395467363924',
        appSecret: 'e4e9ade9022d41d3adfab3d6a67dd022',
        redirect_uri: 'https://lorealpreciousstones.justdigit.al/',
        status: true,
        cookie: true,
        xfbml: true,
        oauth: true
    });
});