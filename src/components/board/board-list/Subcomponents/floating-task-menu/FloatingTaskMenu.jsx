import React, {useState} from "react";
import "./FloatingTaskMenu.scss";
import profile from "../../../../../assets/images/profile.png";
import Close from "../../../../html/SVG/Close";
import {connect} from 'react-redux';
import * as PropTypes from "prop-types";
import Button from "../../../../html/button/primary";

const FloatingTaskMenu = ({
                              isTaskPopupOpen,
                              toggleTaskPopup,
                              currentTask,
                              handleTaskCreation,
                              projectListIndex
                          }) => {
    const [taskTitle, setTaskTitle] = useState(
        currentTask ? currentTask.title : "New task")
    const [taskDescription, setTaskDescription] = useState(
        currentTask ? currentTask.description : "A new awesome task")

    const onAddTaskFormSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            // It needs to be an string in order to be accepted by react-beautiful-dnd as a draggable
            title: taskTitle,
            description: taskDescription,
            attachments: [],
            comments: [],
            deadlineDate: new Date(2020, 11, 28),
            labels: [],
            members: []
        };
        handleTaskCreation(projectListIndex, newTask)
        toggleTaskPopup()
    }

    return (
        <div className={isTaskPopupOpen ? "float-menu__active" : "float-menu__unactive"}>
            <div className="floating-menu__background">
                <form onSubmit={onAddTaskFormSubmit} className="floating-menu__container">
                    <div >
                        <section className="floating-menu__section">
                            <div className="floating-menu__section__title__wrapper">
            <textarea
                value={taskTitle}
                onChange={(e) => {
                    setTaskTitle(e.target.value)
                }}
                rows="1" className="floating-menu__section__title"/>
                                <div
                                    onClick={toggleTaskPopup}
                                    className="floating-menu__section__close-button__wrapper">
                                    <Close size={"1"}/>
                                </div>
                            </div>
                        </section>
                        <div className="floating-menu__extras">
                            <div className="floating-menu__interactions__wrapper">
                                <section className="floating-menu__section">
                                    <h3 className="floating-menu__section__sub-title">Description</h3>
                                    <textarea
                                        className="floating-menu__section__description"
                                        rows="2"
                                        placeholder="Add a more detailed description..."
                                        defaultValue={taskDescription}
                                        onChange={(e) => {
                                            setTaskDescription(e.target.value)
                                        }}
                                    />
                                </section>
                                <section className="floating-menu__section">
                                    <h3 className="floating-menu__section__sub-title">Comments</h3>
                                    <div className="floating-menu__section__comment__wrapper">
                                        <img
                                            className="floating-menu__section__comment__image"
                                            src={profile}
                                            alt="user"
                                        />
                                        <input
                                            className="floating-menu__section__comment__input"
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Write a comment..."
                                        />
                                    </div>
                                    <Button title={"Create task"} type={"submit"}/>
                                </section>
                            </div>
                            <aside className="floating-menu__add-ons">
                                <h4 className="floating-menu__add-ons__title">Add to task</h4>
                                <ul className="floating-menu__add-ons__list">
                                    <li className="floating-menu__add-ons__list__item">Members</li>
                                    <li className="floating-menu__add-ons__list__item">Labels</li>
                                    <li className="floating-menu__add-ons__list__item">Checklist</li>
                                    <li className="floating-menu__add-ons__list__item">Due date</li>
                                    <li className="floating-menu__add-ons__list__item">Attachment</li>
                                    <li className="floating-menu__add-ons__list__item">Cover</li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        currentTask: state.task
    }
}

FloatingTaskMenu.propTypes = {
    currentTask: PropTypes.object,
    isTaskPopupOpen: PropTypes.bool,
    toggleTaskPopup: PropTypes.func,
    handleTaskCreation: PropTypes.func,
    projectListIndex: PropTypes.number
};

export default connect(mapStateToProps)(FloatingTaskMenu);
