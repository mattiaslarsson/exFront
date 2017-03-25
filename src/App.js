import React, {Component} from "react";
import "./App.css";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as navActions from "./actions/NavigationActions";

import Login from "./components/login/Login";
import MenuBar from "./components/common/menuBar/MenuBar";

class App extends Component {

    constructor(props) {
        super(props);
    }

    getView() {

        switch (this.props.navigation.currPage) {
            case "LOGIN":
                return this.loginView();
            case "HOME":
                return this.homeView();
            case "PROJECT":
                return this.projectView();
            case "ADMIN":
                return this.adminView();
        }
    }

    loginView() {
        return (
            <Login />
        )
    }

    homeView() {
        return (
            <p>home</p>
        )
    }

    projectView() {
        return (
            <p>project</p>
        )
    }

    adminView() {
        return (
            <p>admin</p>
        )
    }

    getMenuBar() {
        if (this.props.users.loggedIn) {
            return (
                <MenuBar />
            )
        }
    }

    render() {
        return (
            <div>
                {this.getMenuBar()}
                <div className="app">
                    {this.getView()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        users: state.users,
        navigation: state.navigation
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(navActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);