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
                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" onChange={this.handleNameChange} value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Age" onChange={this.handleAgeChange} value={this.state.age} />
                    </div>
                    <button type="button" className="btn btn-default" onClick={this.handleSaveUserButtonClicked}>save</button>
                </form>
            </footer>
        );
    }

});

module.exports = Footer;