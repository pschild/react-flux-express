var React = require('react');
var ListItem = require('./ListItem.react');

var List = React.createClass({

    render: function() {
        var listItems = [];
        for (var i = 0; i < this.props.users.length; i++) {
            listItems.push(<ListItem key={this.props.users[i].id} user={this.props.users[i]} />);
        }

        var userTable = (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        );

        return this.props.isPending ? (<div>Loading...</div>) : userTable;
    }

});

module.exports = List;