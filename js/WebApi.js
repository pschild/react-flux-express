var $ = require('jquery');

var AppDispatcher = require('./dispatcher/AppDispatcher');
var UserConstants = require('./constants/UserConstants');

function _dispatch(key, response) {
    AppDispatcher.dispatch({
        actionType: key,
        response: response
    });
}

var WebApi = {

    loadAll: function() {
        $.ajax({
            url: 'users',
            method: 'GET'
        }).done(function(response) {
            _dispatch(UserConstants.USERS_LOADED, response);
        }).fail(function() {
            console.error('Ooops! Something went wrong...');
        });
    },

    create: function(payload) {
        $.ajax({
            url: 'user',
            method: 'POST',
            data: payload
        }).done(function(response) {
            _dispatch(UserConstants.USER_CREATE, response);
        }).fail(function() {
            console.error('Ooops! Something went wrong...');
        });
    }

};

module.exports = WebApi;
