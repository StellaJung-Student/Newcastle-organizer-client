import React from "react";
import "./TaskAdder.scss";
import * as PropTypes from "prop-types";

const TaskAdder = ({toggleTaskPopup}) => (
    <div onClick={toggleTaskPopup} className="task__adder__wrapper">
        <input className="task__adder" type="button" value="+ Add task..."/>
    </div>
);

TaskAdder.propTypes = {
    toggleTaskPopup: PropTypes.func
}

export default TaskAdder;
