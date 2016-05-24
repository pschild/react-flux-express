var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var UserConstants = require('../constants/UserConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _users = [];
var _isPending = false;

var UserStore = assign({}, EventEmitter.prototype, {

    getAll: function () {
        return _users;
    },

    isPending: function () {
        return _isPending;
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
            _users.push(action.payload.user);
            UserStore.emitChange();
            break;

        case UserConstants.USERS_LOADING:
            _isPending = true;
            UserStore.emitChange();
            break;

        case UserConstants.USERS_LOADED:
            _users = action.payload.users;
            _isPending = false;
            UserStore.emitChange();
            break;

        default:
            // no op
    }
});

module.exports = UserStore;
