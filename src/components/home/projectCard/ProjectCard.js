import React from 'react';
import Paper from 'material-ui/Paper';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as projectActions from '../../../actions/ProjectActions';

class ProjectCard extends React.Component {



    constructor(props) {
        super(props);
        const selected = false;
    };

    render(){
        return (
            <div >
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
        actions: bindActionCreators(projectActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);