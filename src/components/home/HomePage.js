import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as navActions from '../../actions/NavigationActions';

import './HomePage.css';
import InfoPane from './infoPane/InfoPane';
import ProjectList from './projectList/ProjectList';

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <div className="heading">
                    <h1>Welcome back {this.props.users.user.userFirstName} {this.props.users.user.userSurName}</h1>
                </div>

                <div className="two-column-container">
                    <div className="left-column">
                        <InfoPane currUser={this.props.users.user}/>
                    </div>
                    <div className="right-column">
                        <ProjectList />
                    </div>
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