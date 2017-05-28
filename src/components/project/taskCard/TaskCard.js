import React from "react";
import Paper from "material-ui/Paper";
import "./TaskCard.css";
import FontAwsome from "react-fontawesome";

export default class TaskCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            depth: 3,
            paperclass: "task-card",
            icon: "icon-hide",
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
            paperclass: "task-card-hovered",
            icon: "icon-show"
        });
    }

    onMouseLeave() {
        this.setState({
            depth: 1,
            paperclass: "task-card",
            icon: "icon-hide"
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
                    <p className="task-heading">Description:</p> <p
                    className="task-text">{this.props.task.taskDescription}</p>
                </div>
                <div>
                    <div className="icon-left">
                        <FontAwsome className={this.state.icon} tag="i" name="chevron-circle-left"/>
                    </div>
                    <div className="icon-center">
                        <FontAwsome className={this.state.icon} tag="i" name="pencil-square-o"/>
                    </div>
                    <div className="icon-right">
                        <FontAwsome className={this.state.icon} tag="i" name="chevron-circle-right"/>
                    </div>
                </div>
            </Paper>
        )
    }
}