var React = require('react');
var Header = require('./Header.react');
var List = require('./List.react');
var Footer = require('./Footer.react');

var UserStore = require('../stores/UserStore');
var UserActions = require('../actions/UserActions');

function getStateFromStores() {
    return {
        allUsers: UserStore.getAll(),
        isPending: UserStore.isPending()
    };
}

var App = React.createClass({

    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        UserStore.addChangeListener(this._onChange);
        UserActions.loadAll(); // load users from the server when app is started
    },

    componentWillUnmount: function() {
        UserStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getStateFromStores());
    },

    render: function() {
        return (
            <div>
                <Header />
                <List users={this.state.allUsers} isPending={this.state.isPending} />
                <Footer />
            </div>
        );
    }

});

module.exports = App;