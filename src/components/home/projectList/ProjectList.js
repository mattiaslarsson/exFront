import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as projectActions from "../../../actions/ProjectActions";

class ProjectList extends React.Component {
    constructor(props) {
        super(props)
        this.props.actions.getAllProjects();
    }



    render(){
        return (
            <div className="project-list">

            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        projects: state.projects
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(projectActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);