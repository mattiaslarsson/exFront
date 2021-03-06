import React from "react";
import Paper from "material-ui/Paper";
import "./TaskCard.css";
import FontAwsome from "react-fontawesome";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as projectActions from "../../../actions/ProjectActions";
import * as navigationActions from "../../../actions/NavigationActions";

export class TaskCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            depth: 3,
            paperclass: "task-card",
            icon: "icon-hide",
            iconContainer: "hidden",
            style: {
                backgroundColor: this.props.backColor
            },
            taskStatus: ["TODO", "WIP", "TEST", "DONE"]
        };
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.showRightIcon = this.showRightIcon.bind(this);
        this.showLeftIcon = this.showLeftIcon.bind(this);
    }

    onMouseOver() {
        this.setState({
            depth: 3,
            paperclass: "task-card-hovered",
            icon: "icon-show",
            iconContainer: "showed"
        });
    }

    onMouseLeave() {
        this.setState({
            depth: 1,
            paperclass: "task-card",
            icon: "icon-hide",
            iconContainer: "hidden"
        });
    }

    showLeftIcon() {
        if (this.state.taskStatus.indexOf(this.props.task.taskStatus) > 0) {
            return (
                <FontAwsome className={this.state.icon}
                            tag="i"
                            name="chevron-circle-left"
                            size="2x"
                onClick={() => this.updateTask("LEFT")}
                />
            )
        }
    }

    showRightIcon() {
        if (this.state.taskStatus.indexOf(this.props.task.taskStatus) < this.state.taskStatus.length-1) {
            return (
                <FontAwsome className={this.state.icon}
                            tag="i"
                            name="chevron-circle-right"
                            size="2x"
                            onClick={() => this.updateTask("RIGHT")}
                />
            )
        }
    }

    updateTask(direction) {
        let index = this.state.taskStatus.indexOf(this.props.task.taskStatus);
        switch (direction) {
            case "LEFT":
                if (index > 0) {
                    let changedTask = JSON.parse(JSON.stringify(this.props.task));
                    changedTask.taskStatus = this.state.taskStatus[index - 1];
                    this.props.actions.updateTask(changedTask);
                }
                break;
            case "RIGHT":
                if (index < this.state.taskStatus.length - 1) {
                    let changedTask = JSON.parse(JSON.stringify(this.props.task));
                    changedTask.taskStatus = this.state.taskStatus[index + 1];
                    this.props.actions.updateTask(changedTask);
                }
                break;
            default:
        }
    }

    deleteTask(id) {
        this.props.actions.deleteTask(id);
    }

    openModal() {
        this.props.actions.setTask(this.props.task);
        this.props.navactions.openModal();
    }

    render() {
        return (
            <Paper className={this.state.paperclass} zDepth={this.state.depth} style={this.state.style} rounded={true}
                   onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
                <div className={"icon-container " + this.state.iconContainer}>
                    <div className="icon-left">
                        {this.showLeftIcon()}
                    </div>
                    <div className="icon-center-left">
                        <FontAwsome className={this.state.icon}
                                    tag="i"
                                    name="pencil-square-o"
                                    size="2x"
                                    onClick={() => this.openModal()}
                        />
                    </div>
                    <div className="icon-center-right">
                        <FontAwsome className={this.state.icon}
                                    tag="i"
                                    name="window-close"
                                    size="2x"
                                    onClick={() => this.deleteTask(this.props.task.id)}
                        />
                    </div>
                    <div className="icon-right">
                        {this.showRightIcon()}
                    </div>
                </div>
                <div className="task-title-container">
                    <p className="task-heading">Title:</p>
                </div>
                <div className="task-title-text-container">
                    <p className="task-title">{this.props.task.taskTitle}</p>
                </div>
                <div className="task-description-title-container">
                    <p className="task-heading">Description:</p>
                </div>
                <div className="task-decription-text-container">
                    <p className="task-text">{this.props.task.taskDescription}</p>
                </div>
            </Paper>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(projectActions, dispatch),
        navactions: bindActionCreators(navigationActions, dispatch)

    }
}

export default connect(null, mapDispatchToProps)(TaskCard);