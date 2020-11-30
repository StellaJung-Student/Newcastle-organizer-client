import React, {useEffect, useState} from "react";
import "./BoardsList.scss";
import NormalBoard from "./Subcomponents/normal-board/NormalBoard";
import RecentBoard from "./Subcomponents/recent-board/RecentBoard";
import Carousel from "react-elastic-carousel";
import {createProject, fetchProjects} from "../../../actions/projects";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ProjectCreate from "../board-create/ProjectCreate";

const BoardsList = ({
                        recentlyViewedData,
                        fetchProjectsProps,
                        projects,
                        createNewProjectProps
                    }) => {
    const [createBoardVisible, setCreateBoardVisible] = useState(false);

    const toggleCreateBoard = () => {
        setCreateBoardVisible(prevState => !prevState)
    }

    const breakPointsRecentlyView = [
        {width: 1, itemsToShow: 1},
        {width: 800, itemsToShow: 2},
        {width: 1200, itemsToShow: 3},
        {width: 1550, itemsToShow: 4},
        {width: 1800, itemsToShow: 5},
    ];

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 630, itemsToShow: 2},
        {width: 930, itemsToShow: 3},
        {width: 1240, itemsToShow: 4},
        {width: 1550, itemsToShow: 5},
    ];

    useEffect(() => {
        fetchProjectsProps();
    }, [fetchProjectsProps])

    const addPersonalBoard  = (project) => {
        createNewProjectProps(project);
    }

    return (
        <div className="board-list__wrapper">
            <h1 className="board-list__title">Welcome back, AcceptableUser!</h1>
            <section className="board-list__important-section">
                <h2 className="board-list__important-section__title">
                    Recently viewed
                </h2>
                <ul className="board-list__important-section__list">
                    <Carousel breakPoints={breakPointsRecentlyView}>
                        {recentlyViewedData.map((recentBoard, recentBoardIndex) => (
                            <li
                                className="board-list__important-section__list__item"
                                key={recentBoardIndex}
                            >
                                <RecentBoard
                                    boardTitle={recentBoard.title}
                                    boardDescription={recentBoard.description}
                                />
                            </li>
                        ))}
                    </Carousel>
                </ul>
            </section>
            <section className="board-list__section">
                <div className="board-list__section__title__wrapper">
                    <h2 className="board-list__section__title">Personal boards</h2>
                    <input
                        className="board-list__section__button"
                        type="button"
                        value="Add board"
                        onClick={toggleCreateBoard}
                    />
                </div>
                <ul className="board-list__section__list">
                    <Carousel breakPoints={breakPoints}>
                        {projects.map((personalBoard, personalBoardIndex) => (
                            <Link to={`/projects/${personalBoard.id}`}
                                  key={personalBoard.id}>
                                <li
                                    className="board-list__section__list__item"
                                >
                                    <NormalBoard boardTitle={personalBoard.title}/>
                                </li>
                            </Link>
                        ))}
                    </Carousel>
                </ul>
            </section>
            <section className="board-list__section">
                <div className="board-list__section__title__wrapper">
                    <h2 className="board-list__section__title">Team boards</h2>
                </div>
                <ul className="board-list__section__list">
                    <Carousel breakPoints={breakPoints}>
                        {[].map((teamBoard, teamBoardIndex) => (
                            <Link key={teamBoard.id}
                                  to={`/projects/${teamBoard.id}`}>
                                <li
                                    className="board-list__section__list__item"
                                >
                                    <NormalBoard boardTitle={teamBoard.title}/>
                                </li>
                            </Link>
                        ))}
                    </Carousel>
                </ul>
            </section>
            <ProjectCreate createBoardVisible={createBoardVisible} addPersonalBoard={addPersonalBoard} toggleCreateBoard={() => toggleCreateBoard()}/>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        projects: state.currentProjects.projects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProjectsProps: () => dispatch(fetchProjects()),
        createNewProjectProps: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardsList);
