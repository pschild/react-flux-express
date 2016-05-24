var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var UserConstants = require('../constants/UserConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _users = [];

var UserStore = assign({}, EventEmitter.prototype, {

    getAll: function () {
        return _users;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case UserConstants.USER_CREATE:
            console.log('USER_CREATE', action);
            _users.push(action.response.user);
            UserStore.emitChange();
            break;

        case UserConstants.USERS_LOADED:
            console.log('USERS_LOADED', action);
            _users = action.response.users;
            UserStore.emitChange();
            break;

        default:
            // no op
    }
});

module.exports = UserStore;
