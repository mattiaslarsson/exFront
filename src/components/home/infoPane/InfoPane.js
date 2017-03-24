import React from 'react';

class InfoPane extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="info-pane">
                <h3>Welcome {this.props.user.firstName} {this.props.user.surName}</h3>
                <p>Tjoloahojdf jhsdfgajh dsfjhgjhsdfagj sdjhgsd</p>
            </div>
        )
    }
}