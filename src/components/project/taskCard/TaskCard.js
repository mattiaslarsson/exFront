import React from 'react';
import Paper from 'material-ui/Paper';
import "./TaskCard.css";

export default class TaskCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            depth: 3,
            paperclass: "task-card",
            style: {
                backgroundColor: this.props.backColor
            }
        };
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseOver() {
        this.setState({
            depth: 3,
            paperclass: "task-card-hovered"
        });
    }

    onMouseLeave() {
        this.setState({
            depth: 1,
            paperclass: "task-card"
        });
    }

    render() {
        return (
                <Paper className={this.state.paperclass} zDepth={this.state.depth} style={this.state.style} rounded={true}
                onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
                    <div>
                        <p className="task-heading">Title:</p> <p className="task-title">{this.props.task.taskTitle}</p>
                    </div>
                    <div>
                        <p className="task-heading">Description:</p> <p className="task-text">{this.props.task.taskDescription}</p>
                    </div>
                </Paper>
        )
    }
}