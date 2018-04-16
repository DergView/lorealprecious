define([
    "jquery",
    "underscore",
    "backbone",
    "Models/reward"
], function ($, _, Backbone,reward) {

var Rewards = Backbone.Collection.extend({
url: "/svc/index.php/rewards",
model: reward
});

return Rewards;

});