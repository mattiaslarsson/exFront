import React from 'react';
import './InfoPane.css';


export default class InfoPane extends React.Component {

    render() {
        return (
            <div className="info-pane">
                <p>Please pick a project on your left and get organized.</p>
                <p className="quote">
                    Organizing is what you do before you do something, so that when you do it, it is not all mixed up.
                </p>
                <p className="author">
                    A.A Milne
                </p>
            </div>
        )
    }
}