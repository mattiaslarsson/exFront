import React from 'react';
import Paper from 'material-ui/Paper';
import "./TaskCard.css";

export default class TaskCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper>
                {this.props.taskTitle}
            </Paper>
        )
    }
}