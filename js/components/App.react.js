var React = require('react');
var Header = require('./Header.react');
var List = require('./List.react');
var Footer = require('./Footer.react');

var UserStore = require('../stores/UserStore');
var UserActions = require('../actions/UserActions');

var App = React.createClass({

    getInitialState: function() {
        return {
            allUsers: UserStore.getAll() // initially an empty list
        };
    },

    componentDidMount: function() {
        UserStore.addChangeListener(this._onChange);
        UserActions.loadAll(); // load users from the server when app is started
    },

    componentWillUnmount: function() {
        UserStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState({
            allUsers: UserStore.getAll() // load the updated list of users from the store
        });
    },

    render: function() {
        return (
            <div>
                <Header />
                <List users={this.state.allUsers} />
                <Footer />
            </div>
        );
    }

});

module.exports = App;