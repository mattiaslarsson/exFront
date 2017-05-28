import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as navActions from "../../../actions/NavigationActions";
import * as userActions from "../../../actions/UserActions";
import * as projectActions from '../../../actions/ProjectActions';

import './menuBar.css';

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.changeView = this.changeView.bind(this);
    }

    changeView(view) {
        switch (view) {
            case "LOGOUT":
                this.props.actions.user.doLogout();
                this.props.actions.nav.gotoLogin();
                break;
            case "HOME":
                this.props.actions.proj.getAllProjects();
                this.props.actions.nav.gotoHome();
                break;
            default:
        }
    }

    render() {
        return (
            <div className="menubar">
                <div className="menu-options">
                <ul>
                    <li onClick={() => this.changeView("HOME")}>
                        <object className="mini-logo" data="../../img/kb_white.svg" type="image/svg+xml" onClick={() => this.changeView("HOME")}/>
                    </li>
                </ul>
                </div>
                <div className="user-div">
                    <ul>
                        <li onClick={() => this.changeView("LOGOUT")}>Logout</li>
                    </ul>
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
            nav: bindActionCreators(navActions, dispatch),
            user: bindActionCreators(userActions, dispatch),
            proj: bindActionCreators(projectActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);