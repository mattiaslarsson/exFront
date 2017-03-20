/**
 * Created by Mattias on 2017-03-01.
 */
import React, {Component} from 'react';
import Request from 'superagent';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            username: '',
            password: ''
        });
    }

    changeUsername(event) {
        this.setState({username: event.target.value});
    }

    changePassword(event) {
        this.setState({password: event.target.value});
    }

    doLogin() {
        console.log(JSON.stringify({username: this.state.username, password: this.state.password}));
        Request
            .post('http://localhost:8080/login')
            .set("Content-Type", "application/json")
            .send({username: this.state.username, password: this.state.password})
            .end((err, res) => {
                if(err || !res.ok) {
                    console.log(err);
                } else {
                    this.props.onLoggedIn(res);
                }
            });
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