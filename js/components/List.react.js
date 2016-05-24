var React = require('react');
var ListItem = require('./ListItem.react');

var List = React.createClass({

    render: function() {
        var listItems = [];
        for (var i = 0; i < this.props.users.length; i++) {
            listItems.push(<ListItem key={this.props.users[i].id} user={this.props.users[i]} />);
        }

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        );
    }

});

module.exports = List;