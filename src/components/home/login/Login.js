/**
 * Created by Mattias on 2017-03-01.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as userActions from '../../../actions/UserActions';

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

    doLogin(username, password) {
        this.props.actions.doLogin(this.user.username, this.user.password);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Username" onChange={(event) => this.changeUsername(event)} />
                <input type="password" placeholder="password" onChange={(event) => this.changePassword(event)} />
                <button type="button" onClick={() => this.doLogin()}>OK</button>
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