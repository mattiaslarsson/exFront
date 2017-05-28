import React from 'react';
import './ProjectColumn.css';
import TaskCard from '../taskCard/TaskCard';

export default class ProjectColumn extends React.Component{

    getColumnTasks() {
        return this.props.tasks.map((currTask) => {
            return (
                <TaskCard key={currTask.id} task={currTask} backColor={this.getBackColor(currTask)} updateTask={this.props.updateTask} removeTask={this.props.removeTask} />
            )
        });
    }

    getBackColor(task) {
        switch (task.taskStatus) {
            case "TODO":
                return "#FFFFBB";
            case "WIP":
                return "#FFBBBB";
            case "TEST":
                return "#BBBBFF";
            case "DONE":
                return "#BBFFBB";
            default:
                return "#FFFFBB";
        }
    }

    render() {
        return (
            <div>
                <div className="column-title">
                    <p>
                        {this.props.title}
                    </p>
                </div>
                <div className="column-tasklist">
                    {this.getColumnTasks()}
                </div>
            </div>
        )
    }
}