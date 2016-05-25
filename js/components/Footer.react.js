var React = require('react');
var UserActions = require('../actions/UserActions');

var Footer = React.createClass({

    getInitialState: function() {
        return {
            name: '',
            age: 0
        };
    },

    handleSaveUserButtonClicked: function() {
        UserActions.create({
            name: this.state.name,
            age: this.state.age
        });

        this.setState({
            name: '',
            age: 0
        });
    },

    handleNameChange: function(event) {
        this.setState({
            name: event.target.value
        });
    },

    handleAgeChange: function(event) {
        this.setState({
            age: +event.target.value
        });
    },

    render: function() {
        return (
            <footer>
                <h3>Create new user</h3>
                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" onChange={this.handleNameChange} value={this.state.name} />
                    </div>
                    &nbsp;
                    <div className="form-group">
                        <input type="number" min="0" className="form-control" placeholder="Age" onChange={this.handleAgeChange} value={this.state.age} />
                    </div>
                    &nbsp;
                    <button type="button" className="btn btn-success" onClick={this.handleSaveUserButtonClicked}>
                        <i className="glyphicon glyphicon-ok"></i>
                    </button>
                </form>
            </footer>
        );
    }

});

module.exports = Footer;