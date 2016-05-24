var React = require('react');

var ListItem = React.createClass({

    render: function() {
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.age}</td>
            </tr>
        );
    }

});

module.exports = ListItem;