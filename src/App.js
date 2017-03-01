import React, { Component } from 'react';
import './App.css';
import Fileuploader from './components/fileuploader/Fileuploader';
import Login from './components/Login';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            file: {},
            noteObj: {}
        });
    }

    handleUploadFinished(file, res) {
        this.setState({file: file, noteObj: JSON.parse(res.text)});
        console.log(res);
        console.log(this.state);
    }

    onLoggedIn(res) {
        console.log(res);
    }

    render() {
        return (
            <div className="App">
                <Login onLoggedIn={(res) => this.onLoggedIn(res)} />
                <Fileuploader preview postUrl="http://localhost:8080/file" onFinished={(file, res) => this.handleUploadFinished(file, res)} />
            </div>
        );
    }
}