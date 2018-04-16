define([
    "jquery",
    "underscore",
    "backbone",
    "Models/charity"
], function ($, _, Backbone, charity) {
    var Charities = Backbone.Collection.extend({
        url: "/svc/index.php/cash_out/charities",
        model: charity
    });
    return Charities;
});