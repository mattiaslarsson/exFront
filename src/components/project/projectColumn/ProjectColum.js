import React from 'react';
import './ProjectColum.css';
import TaskCard from '../taskCard/TaskCard';

export default class ProjectColumn extends React.Component{
    constructor(props) {
        super(props);
    }

    getColumnTasks() {
        return this.props.tasks.map((currTask) => {
            return (
                <TaskCard task={currTask} />
            )
        });
    }

    render() {
        return (
            <div>
                <div className="column-title">
                    <p className="title">
                        {this.props.title}
                    </p>
                </div>
                <div className="column-tasks">
                    {this.getColumnTasks()}
                </div>
            </div>
        )
    }
}