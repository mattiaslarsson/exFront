import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as projectActions from "../../../actions/ProjectActions";

class projectPage extends React.Component {

    constructor(props) {
        super(props);
        this.props.actions.getProject(1);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        let id = 2;
        if (this.props.project.id !== 1) {
            id = 1;
        }
        this.props.actions.getProject(id);
    }

    render() {
        return (
            <div>
                <p>{this.props.project.id} {this.props.project.text}</p>
                <button onClick={this.onButtonClick}>Click</button>
            </div>
        )
    };
}

function mapStateToProps(state, ownProps) {
    return {
        project: state.projects
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(projectActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(projectPage);