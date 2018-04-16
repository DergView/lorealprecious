define([
    "jquery",
    "underscore",
    "backbone",
    "Models/survey"
], function ($, _, Backbone,survey) {
    var Surveys = Backbone.Collection.extend({
        url: "/svc/index.php/user/surveys",
        model: survey
    });
    return Surveys;
});