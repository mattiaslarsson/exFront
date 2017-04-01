import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as navActions from '../../actions/NavigationActions';

import './HomePage.css';
import InfoPane from './infoPane/InfoPane';
import ProjectList from './projectList/ProjectList';

class HomePage extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="two-column-container">
                <div className="left-column">
                    <InfoPane currUser={this.props.users.user} />
                    <p>left column</p>
                </div>
                <div className="right-column">
                    <ProjectList />
                    <p>right column</p>
                </div>
            </div>
        )
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
        actions: {
            nav: bindActionCreators(navActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);