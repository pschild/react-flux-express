var WebApi = require('../WebApi');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var UserConstants = require('../constants/UserConstants');

var UserActions = {

    loadAll: function() {
        WebApi.loadAll();

        // dispatch this action to bypass the timeout for the server request (optional, just for usability purposes)
        AppDispatcher.dispatch({
            actionType: UserConstants.USERS_LOADING,
            payload: null
        });
    },

    create: function(payload) {
        WebApi.create(payload);
    },

    remove: function(user) {
        WebApi.remove(user);
    },

    update: function(user, payload) {
        WebApi.update(user, payload);
    }

};

module.exports = UserActions;
