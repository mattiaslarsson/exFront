import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as projectActions from "../../../actions/ProjectActions";

import ProjectCard from '../projectCard/ProjectCard';

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.props.actions.getAllProjects();
    }


    getProjects() {
        return this.props.projects.projectList.map((currProj) => {
            return (
            <ProjectCard key={currProj.projectTitle} currProject={currProj} />
            )
        });
    }


    render(){
        return (
            <div className="project-list">
                {this.getProjects()}
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