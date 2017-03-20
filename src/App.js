import React, {Component} from "react";
import ProjectPage from './components/project/projectPage/ProjectPage';
import "./App.css";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <h1>Header -> menu etc</h1>
                <ProjectPage />
            </div>

        );
    }
}