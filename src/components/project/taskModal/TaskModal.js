import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as projectActions from "../../../actions/ProjectActions";
import * as navigationActions from "../../../actions/NavigationActions";

export class TaskModal extends React.Component {

    setCurrTask() {
        if (this.props.project.currTask !== null) {
            this.currTask = JSON.parse(JSON.stringify(this.props.project.currTask));
        } else {
            this.currTask = {
                taskTitle: "",
                taskDescription: "",
                taskStatus: "TODO"
            }
        }
    }

    handleClose = () => {
        this.props.navigationactions.closeModal();
    };

    handleSubmit = () => {
        if (this.props.project.currTask !== null) {
            this.props.projectactions.updateTask(this.currTask);
        } else {
            this.props.projectactions.addTask(this.currTask);
        }
        this.props.navigationactions.closeModal();
    };

    changeTitle(event) {
        this.currTask.taskTitle = event.target.value;
    }

    changeDescription(event) {
        this.currTask.taskDescription = event.target.value;
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.handleSubmit}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Add/Edit tasks"
                    actions={actions}
                    modal={true}
                    open={this.props.navigation.modalOpen}>
                    <div>
                        {this.setCurrTask()}
                        <TextField type="text"
                                   floatingLabelText="Title"
                                   defaultValue={this.currTask.taskTitle}
                                   onChange={(event) => this.changeTitle(event)}/>
                    </div>
                    <div>
                        <TextField type="text"
                                   floatingLabelText="Description"
                                   defaultValue={this.currTask.taskDescription}
                                   onChange={(event) => this.changeDescription(event)}/>
                    </div>
                </Dialog>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        project: state.projects,
        navigation: state.navigation
    }
}

function mapDispatchToProps(dispatch) {
    return {
        projectactions: bindActionCreators(projectActions, dispatch),
        navigationactions: bindActionCreators(navigationActions, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal);