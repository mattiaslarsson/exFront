import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActions from "../../../actions/UserActions";


export class User extends React.Component {

    currUserId = 0;

    constructor(props) {
        super(props);
        this.onClickRemove = this.onClickRemove.bind(this);
        this.onClickLoadUsers = this.onClickLoadUsers.bind(this);
    }

    onClickRemove() {
        this.props.actions.deleteUser(this.currUserId);
    }

    onClickLoadUsers() {
        this.props.actions.getAllUsers();
    }

    changeUserId(event) {
        this.currUserId = event.target.value;
    }


    render() {
        return (
            <div>
            <input type="text" onChange={event => this.changeUserId(event)} />
                <button onClick={this.onClickRemove}>REMOVE</button>
                <button onClick={this.onClickLoadUsers}>LOAD ALL</button>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);