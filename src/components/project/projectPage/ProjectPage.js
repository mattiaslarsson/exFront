import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as projectActions from "../../../actions/ProjectActions";

import './ProjectPage.css'

import ProjectColumn from "../projectColumn/ProjectColumn";

class projectPage extends React.Component {

    constructor(props) {
        super(props);
        this.todoTasks = [];
        this.inProgressTasks = [];
        this.inTestingTasks = [];
        this.doneTasks = [];
        this.sortTasks();
    }

    sortTasks() {
        if (this.props.project.currProject.projectTasks.length > 0) {
            this.checkTaskStatus(this.props.project.projectTasks)
        }
        if (this.props.project.currProject.projectSprints.length > 0) {
            this.props.project.currProject.projectSprints.forEach(currSprint => {
                this.checkTaskStatus(currSprint.sprintTasks);
            });
        }
    }

    checkTaskStatus(taskArray) {
        taskArray.forEach(currTask => {
            switch (currTask.taskStatus) {
                case "TODO":
                    this.todoTasks.push(currTask);
                    break;
                case "WIP":
                    this.inProgressTasks.push(currTask);
                    break;
                case "TEST":
                    this.inTestingTasks.push(currTask);
                    break;
                case "DONE":
                    this.doneTasks.push(currTask);
                    break;
                default:
                    currTask.taskStatus = "TODO";
                    this.updateTask(currTask);
            }
        })
    }

    updateTask(currTask) {
        this.props.actions.updateTask(currTask);
    }

    removeTask(currTask) {
        this.props.actions.removeTask(currTask.id);

    }

    render() {
        return (
            <div className="project-container">
                <div className="project-header">
                    <p>{this.props.project.currProject.projectTitle} {this.props.project.currProject.id}</p>
                </div>
                <div className="project-column-container">
                    <div className="project-column"><ProjectColumn
                        key={"todo" + this.props.project.currProject.projectId} title="To Do"
                        tasks={this.todoTasks} />
                    </div>
                    <div className="project-column">
                        <ProjectColumn key={"wip" + this.props.project.currProject.projectId} title="In Progress"
                                       tasks={this.inProgressTasks} />
                    </div>
                    <div className="project-column">
                        <ProjectColumn key={"testing" + this.props.project.currProject.projectId} title="Testing"
                                       tasks={this.inTestingTasks} />
                    </div>
                    <div className="project-column">
                        <ProjectColumn key={"done" + this.props.project.currProject.projectId} title="Done"
                                       tasks={this.doneTasks} />
                    </div>
                </div>
            </div>
        )
    };
}

function mapStateToProps(state, ownProps) {
    return {
        project: state.projects,
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(projectActions, dispatch),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(projectPage);