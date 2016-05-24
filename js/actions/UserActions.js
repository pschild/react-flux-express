var WebApi = require('../WebApi');

var UserActions = {

    loadAll: function() {
        WebApi.loadAll();
    },

    create: function(payload) {
        WebApi.create(payload);
    }

};

module.exports = UserActions;
