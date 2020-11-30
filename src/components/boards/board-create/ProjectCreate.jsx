import React, {useState} from "react";
import "./ProjectCreate.scss";
import Button from "../../html/button/primary";
import Close from "../../html/SVG/Close";

const initialProject = {
    title: 'Awesome project',
    description: 'An awesome project',
    imageUrl: 'Awesome',
    publicStatus: true
}

const ProjectCreate = ({createBoardVisible, toggleCreateBoard, addPersonalBoard}) => {

    const [project, setProject] = useState(initialProject);

    const style = {
        display: createBoardVisible ? "block" : "none"
    }

    const onCreateProjectFormSubmit = async (event) => {
        event.preventDefault();
        addPersonalBoard(project);
        setProject(initialProject);
        toggleCreateBoard();
    }

    const onClickToggleCreateBoard = () => {
        //setProject(initialProject);
        toggleCreateBoard();
    }

    return (
        <>
            <div className="project-create" onClick={onClickToggleCreateBoard} style={style}>
            </div>
            <div className="project-create-form" style={style}>
                <form onSubmit={onCreateProjectFormSubmit}>
                    <div className={"form-title"}>
                        <h2>Create new project</h2>
                        <div onClick={onClickToggleCreateBoard}>
                            <Close size={1}/>
                        </div>
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor={"name"}>Name</label>
                        <input id={"name"} className={"form-control"}
                               placeholder={"Please enter project name"}
                               value={project.title}
                               onChange={(e) => {
                                   setProject(prevState => {
                                           return {...prevState, title: e.target.value}
                                       }
                                   )
                               }}/>
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor={"description"}>Description</label>
                        <input id={"description"} className={"form-control"}
                               placeholder={"Please enter project description"}
                               value={project.description}
                               onChange={(e) => {
                                   setProject(prevState => {
                                           return {...prevState, description: e.target.value}
                                       }
                                   )
                               }}/>
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor={"background"}>Background</label>
                        <input id={"background"} className={"form-control"}
                               placeholder={"Please enter project background url"}
                               value={project.imageUrl}
                               onChange={(e) => {
                                   setProject(prevState => {
                                           return {...prevState, imageUrl: e.target.value}
                                       }
                                   )
                               }}/>
                    </div>
                    <div className={"form-button"}>
                        <Button type={"submit"} title={"Continue"}/>
                    </div>
                </form>
            </div>
        </>
    );
};


export default ProjectCreate;
