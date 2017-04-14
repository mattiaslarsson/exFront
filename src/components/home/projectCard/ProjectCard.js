import React from 'react';
import Paper from 'material-ui/Paper';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as projectActions from '../../../actions/ProjectActions';
import * as navigationActions from '../../../actions/NavigationActions';

class ProjectCard extends React.Component {



    constructor(props) {
        super(props);
        this.changeProject = this.changeProject.bind(this);
    };

    changeProject() {
        console.log('Change project');
        this.props.actions.projActions.setProject(this.props.currProject);
        this.props.actions.navActions.gotoProject();
    }

    render(){
        return (
            <div onClick={this.changeProject}>
                <Paper zDepth={2}>
                    <h4>{this.props.currProject.projectTitle}</h4>
                    <p>{this.props.currProject.projectDescription}</p>
                    <p>Project</p>
                </Paper>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            projActions: bindActionCreators(projectActions, dispatch),
            navActions: bindActionCreators(navigationActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);