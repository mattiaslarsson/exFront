import React from 'react';
import Paper from 'material-ui/Paper';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import './ProjectCard.css';

import * as projectActions from '../../../actions/ProjectActions';
import * as navigationActions from '../../../actions/NavigationActions';

class ProjectCard extends React.Component {

    constructor(props) {
        super(props);
        this.changeProject = this.changeProject.bind(this);
        this.state = {
            depth: 3,
            paperclass: "project-card"
        };
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    };

    onMouseOver() {
        this.setState({
            depth: 3,
            paperclass: "project-card-hovered",
        });
    };

    onMouseLeave() {
        this.setState({
            depth: 1,
            paperclass: "project-card"
        });
    }

    changeProject() {
        this.props.actions.projActions.setProject(this.props.currProject);
        this.props.actions.navActions.gotoProject();
    }

    render() {
        return (
                <Paper className={this.state.paperclass}
                       zDepth={this.state.depth}
                       onMouseOver={this.onMouseOver}
                       onMouseLeave={this.onMouseLeave}
                       onClick={this.changeProject}>
                    <h3>{this.props.currProject.projectTitle}</h3>
                    <p>{this.props.currProject.projectDescription}</p>
                </Paper>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {}
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