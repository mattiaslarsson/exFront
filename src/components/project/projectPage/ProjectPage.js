import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as projectActions from "../../../actions/ProjectActions";

class projectPage extends React.Component {

    currentProjectId = 0;

    constructor(props) {
        super(props);
        this.onButtonGetAllClick = this.onButtonGetAllClick.bind(this);
        this.onButtonGetOneClick = this.onButtonGetOneClick.bind(this);
    }

    onButtonGetAllClick() {
        this.props.actions.getProjects();
    }

    onButtonGetOneClick() {
        this.props.actions.getProject(this.currentProjectId);
    }

    changeProjectId(event) {
        this.currentProjectId = event.target.value;
    }

    displayProject() {
        if (this.props.project.project) {
            return (
                <p>{this.props.project.project.projectTitle} {this.props.project.project.id}</p>
            )
        }
    }

    getTodoTask() {

    }

    getInProgressTasks() {

    }

    getInTestingTasks() {

    }

    getDoneTasks() {

    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Project ID" onChange={(event) => this.changeProjectId(event)}/>
                <button onClick={this.onButtonGetAllClick}>Click to get all</button>
                <button onClick={this.onButtonGetOneClick}>Click to get {this.currentProjectId}</button>
                {this.displayProject()}
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