import React, {useEffect, useRef, useState} from "react";
import "./ListAdder.scss";
import PropTypes from 'prop-types'
import Cross from "../../../../html/SVG/Cross";

const ListAdder = (
    {
        handleListCreation,
        projectId
    }
) => {
    const [inputType, setInputType] = useState("button")
    const [addTaskActive, setAddTaskActive] = useState(false)
    const [inputValue, setInputValue] = useState("+ Add list...")
    const addTaskRef = useRef()

    useEffect(() => {
        const onBodyClick = (event) => {
            if (addTaskRef.current && addTaskRef.current.contains(event.target)) {
                return;
            }

            changeInputToInitStatus()
        };
        document.body.addEventListener("click", onBodyClick)
    }, [])

    const onAddListClick = () => {
        if(addTaskActive === false){
            setAddTaskActive(true);
            setInputType("text");
            setInputValue("");
        }
    }

    const onAddTaskEnterPress = async (e) => {
        if (e.key === "Enter") {
            changeInputToInitStatus();
            await handleListCreation({
                // It needs to be an string in order to be accepted by react-beautiful-dnd as a draggable
                title: inputValue,
                titleEditable: false,
                tasks: [],
            }, projectId)
        }
    }

    /**
     * Change the input to init status (button add list)
     */
    function changeInputToInitStatus() {
        setAddTaskActive(false);
        setInputType("button");
        setInputValue("+ Add list...");
    }

    /**
     * Close the add list zone
     */
    const onCloseAddListClick = () => {
        if(addTaskActive === true){
            changeInputToInitStatus();
        }
    }
    return (
        <div className={"list__adder__wrapper"}>
            <div className={addTaskActive ? "list_adder_input_active" : "list_adder_input"} ref={addTaskRef}>
                <input
                    onClick={onAddListClick}
                    className="list__adder"
                    autoFocus={true}
                    type={inputType}
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value)
                    }
                    }
                    onKeyPress={onAddTaskEnterPress}
                    placeholder={"Please enter the task title"}
                />
                <button onClick={onCloseAddListClick}>
                    <Cross size={1} />
                </button>
            </div>
        </div>
    );
};

ListAdder.propTypes = {
    handleListCreation: PropTypes.func
}

export default ListAdder;
