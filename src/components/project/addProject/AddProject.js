import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as projectActions from "../../../actions/ProjectActions";


class AddProject extends React.Component {

    currProject = {
        projectTitle: "",
        projectDescription: "",
        projectCustomer: {},
        projectSprints: [],
        projectTasks: [],
        projectUsers: []
    };

    constructor(props) {
        super(props);


        this.changeTitle = this.changeTitle.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.addCustomer = this.addCustomer.bind(this);
        this.addSprint = this.addSprint.bind(this);
        this.addTask = this.addTask.bind(this);
        this.addUser = this.addUser.bind(this);

        this.saveProject = this.saveProject.bind(this);
    }

    changeTitle(event) {
        this.currProject.projectTitle = event.target.value;
    }

    changeDescription(event) {
        this.currProject.projectDescription = event.target.value;
    }

    addCustomer(event) {
    }

    addSprint(event) {
    }

    addTask(event) {
    }

    addUser(even) {
    }

    saveProject() {
        this.props.actions.addProject(this.currProject);
    }

    getCurrentProject() {
        return (
            <div>
                <h2>CurrProject</h2>
                <p><strong>Id:</strong> {this.props.project.currProject.id}</p>
                <p><strong>Title:</strong> {this.props.project.currProject.projectTitle}</p>
                <p><strong>Description:</strong> {this.props.project.currProject.id}</p>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Add project</h1>
                    <input type="text" placeholder="Title" onChange={event => this.changeTitle(event)}/>
                    <input type="text" placeholder="Description" onChange={event => this.changeDescription(event)}/>
                    <button onClick={this.saveProject}>SAVE PROJECT</button>
                </div>
                {this.getCurrentProject()}
            </div>

        );
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);