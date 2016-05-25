var React = require('react');
var UserActions = require('../actions/UserActions');

var initialState = {
    editMode: false,
    editedUsername: '',
    editedAge: 0
};

var ListItem = React.createClass({

    getInitialState: function() {
        return initialState;
    },

    render: function() {
        var nameInput = <input className="form-control" type="text" value={this.state.editedUsername} onChange={this.handleNameChanged} />;
        var ageInput = <input className="form-control" type="number" value={this.state.editedAge} onChange={this.handleAgeChanged} />;

        var defaultButtonGroup =
            <div>
                <button onClick={this.handleEditButtonClicked} className="btn btn-default"><i className="glyphicon glyphicon-pencil"></i></button>
                &nbsp;
                <button onClick={this.handleDeleteButtonClicked} className="btn btn-danger"><i className="glyphicon glyphicon-trash"></i></button>
            </div>;

        var editButtonGroup =
            <div>
                <button onClick={this.handleSaveButtonClicked} className="btn btn-success"><i className="glyphicon glyphicon-ok"></i></button>
                &nbsp;
                <button onClick={this.handleCancelButtonClicked} className="btn btn-danger"><i className="glyphicon glyphicon-remove"></i></button>
            </div>;

        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.state.editMode ? nameInput : this.props.user.name}</td>
                <td>{this.state.editMode ? ageInput : this.props.user.age}</td>
                <td>
                    {this.state.editMode ? editButtonGroup : defaultButtonGroup}
                </td>
            </tr>
        );
    },

    handleNameChanged: function(event) {
        this.setState({
            editedUsername: event.target.value
        });
    },

    handleAgeChanged: function(event) {
        this.setState({
            editedAge: event.target.value
        });
    },

    handleEditButtonClicked: function() {
        this.setState({
            editMode: true,
            editedUsername: this.props.user.name,
            editedAge: this.props.user.age
        });
    },

    handleDeleteButtonClicked: function() {
        UserActions.remove(this.props.user);
    },

    handleCancelButtonClicked: function() {
        this.setState(initialState);
    },

    handleSaveButtonClicked: function() {
        UserActions.update(this.props.user, {
            name: this.state.editedUsername,
            age: this.state.editedAge
        });

        this.setState(initialState);
    }

});

module.exports = ListItem;