import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import './HomePage.css';

class HomePage extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>

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
            nav: bindActionCreators(navActions, dispatch),
            user: bindActionCreators(userActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);