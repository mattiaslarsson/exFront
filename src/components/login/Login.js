/**
 * Created by Mattias on 2017-03-01.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActions from "../../actions/UserActions";

import "./Login.css";

import * as styles from "../common/Styles";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Login extends Component {
    constructor(props) {
        super(props);
        this.user = {
            username: "",
            password: ""
        };
        this.doLogin = this.doLogin.bind(this);
    }


    changeUsername(event) {
        this.user.username = event.target.value;
    }

    changePassword(event) {
        this.user.password = event.target.value;
    }

    doLogin() {
        this.props.actions.doLogin(this.user.username, this.user.password);
    }

    render() {
        return (
            <div className="login-div">
                <Paper style={styles.paperLoginStyle} zDepth={2}>
                    <div className="logo-div">
                        <object className="small-logo-opacity" data="../../img/kb.svg" type="image/svg+xml"/>
                    </div>
                    <TextField type="text" inputStyle={styles.inputBlocks} floatingLabelText="Username"
                               onChange={(event) => this.changeUsername(event)}/>
                    <TextField type="password" inputStyle={styles.inputBlocks} floatingLabelText="Password"
                               onChange={(event) => this.changePassword(event)}/>
                    <br />
                    <RaisedButton type="button" onClick={() => this.doLogin()}>OK</RaisedButton>
                </Paper>
            </div>
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {
        data: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);