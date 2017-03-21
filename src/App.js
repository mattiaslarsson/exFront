import React, {Component} from "react";
import ProjectPage from './components/project/projectPage/ProjectPage';
import Login from './components/home/login/Login';
import User from './components/project/user/User';
import "./App.css";

export default class App extends Component {

    render() {
        return (
            <div className="App">
                <h1>Header -> menu etc</h1>
                <Login />
                <ProjectPage />
                <User />
            </div>
        );
    }
}