import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as navActions from "../../../actions/NavigationActions";
import * as userActions from "../../../actions/UserActions";

import './menuBar.css';

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.changeView = this.changeView.bind(this);
    }

    projectMenuOption() {
        if (this.props.project.currProject !== {}){
            return (
                <li onClick={() => this.changeView("PROJECT")}>Project</li>
            )
        }
    }

    adminMenuOption() {
        if (this.props.users.user.mainRole === "ADMIN") {
            return (
                <li onClick={() => this.changeView("ADMIN")}>Admin</li>
            )
        }
    }

    changeView(view) {
        switch (view) {
            case "LOGOUT":
                this.props.actions.user.doLogout();
                this.props.actions.nav.gotoLogin();
                break;
            case "HOME":
                this.props.actions.nav.gotoHome();
                break;
            case "PROJECT":
                this.props.actions.nav.gotoProject();
                break;
            case "ADMIN":
                this.props.actions.nav.gotoAdmin();
                break;
        }
    }


    render() {
        return (
            <div className="menubar">
                <div className="menu-options">
                <ul>
                    <li onClick={() => this.changeView("HOME")}>Home</li>
                    {this.projectMenuOption()}
                    {this.adminMenuOption()}
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
            user: bindActionCreators(userActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);