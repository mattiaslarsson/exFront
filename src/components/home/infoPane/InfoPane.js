import React from 'react';

export default class InfoPane extends React.Component {

    render() {
        return (
            <div className="info-pane">
                <h3>Welcome {this.props.currUser.userFirstName} {this.props.currUser.userSurName}</h3>
                <p>Tjoloahojdf jhsdfgajh dsfjhgjhsdfagj sdjhgsd</p>
            </div>
        )
    }
}