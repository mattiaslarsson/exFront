import React from "react";
import {connect} from "react-redux";
import FontAwsome from "react-fontawesome";
import {bindActionCreators} from "redux";
import * as projectActions from "../../../actions/ProjectActions";
import * as navigationActions from "../../../actions/NavigationActions";

import './ProjectPage.css'

import ProjectColumn from "../projectColumn/ProjectColumn";

class projectPage extends React.Component {

    addTask() {
        this.props.actions.removeTask();
        this.props.navactions.openModal();
    }

    render() {
        return (
            <div className="project-container">
                <div className="project-header">
                    <div className="project-name">
                    <p>{this.props.project.currProject.projectTitle}</p>
                    </div>
                    <div className="project-add-task">
                        <FontAwsome
                            tag="i"
                            inverse={true}
                            name="plus-circle"
                            size="2x"
                            onClick={() => this.addTask()} />
                    </div>
                </div>
                <div className="project-column-container">
                    <div className="project-column"><ProjectColumn
                        key={"todo" + this.props.project.currProject.projectId} title="To Do"
                        tasks={this.props.project.todoTasks} />
                    </div>
                    <div className="project-column">
                        <ProjectColumn key={"wip" + this.props.project.currProject.projectId} title="In Progress"
                                       tasks={this.props.project.inProgressTasks} />
                    </div>
                    <div className="project-column">
                        <ProjectColumn key={"testing" + this.props.project.currProject.projectId} title="Testing"
                                       tasks={this.props.project.testTasks} />
                    </div>
                    <div className="project-column">
                        <ProjectColumn key={"done" + this.props.project.currProject.projectId} title="Done"
                                       tasks={this.props.project.doneTasks} />
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
        navactions: bindActionCreators(navigationActions, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(projectPage);