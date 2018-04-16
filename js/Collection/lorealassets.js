define([
    "jquery",
    "underscore",
    "backbone",
    "Models/lorealasset"
], function ($, _, Backbone, lorealasset) {
    var LorealAssets = Backbone.Collection.extend({
        url: "http://192.168.1.43/staging-machineloyalty/api/LOrealPSAssets?$orderby=ColourKey",
        model: lorealasset
    });
    return LorealAssets;
});