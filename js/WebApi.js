var $ = require('jquery');

var AppDispatcher = require('./dispatcher/AppDispatcher');
var UserConstants = require('./constants/UserConstants');

function _dispatch(key, response) {
    AppDispatcher.dispatch({
        actionType: key,
        payload: response
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
    },

    remove: function(user) {
        $.ajax({
            url: 'user/' + user.id,
            method: 'DELETE'
        }).done(function(response) {
            _dispatch(UserConstants.USER_REMOVE, response);
        }).fail(function() {
            console.error('Ooops! Something went wrong...');
        });
    },

    update: function(user, payload) {
        $.ajax({
            url: 'user/' + user.id,
            method: 'PUT',
            data: payload
        }).done(function(response) {
            _dispatch(UserConstants.USER_UPDATED, response);
        }).fail(function() {
            console.error('Ooops! Something went wrong...');
        });
    }

};

module.exports = WebApi;
