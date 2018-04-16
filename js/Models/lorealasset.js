define([
    "jquery",
    "underscore",
    "backbone"   
], function ($, _, Backbone) {
   
    var LorealAsset = Backbone.Model.extend({
        urlRoot: "",
        idAttribute:"AssetId",
        defaults: {
            "AssetId":"",
            "title": "",
            "description":"",
            "imgSrc":"",
            "colourcode":"",
            "colourname":"",
            "colourfamily":""

        }        
    });
    return LorealAsset;
});