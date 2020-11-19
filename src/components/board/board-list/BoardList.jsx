import React, {useState} from "react";
import "./BoardList.scss"
import TaskAdder from "./Subcomponents/task-adder/TaskAdder"
import Task from "./Subcomponents/task/Task"
import TitleList from "./Subcomponents/title-list/TitleList"

const BoardList = () => {
  const [list, changeList] = useState([
    {
      id: "1",
      title: "To do",
      titleEditable: false,
      items: ["Code migration and merge", "JS Hint implementation"]
    },
    {
      id: "2",
      title: "In progress",
      titleEditable: false,
      items: ["Request Costum feedback", "CDD refactoring", "Dashboard improvements"]
    },
    {
      id: "3",
      title: "Pending",
      titleEditable: false,
      items: ["Request custom feedback"]
    },
    {
      id: "4",
      title: "Review",
      titleEditable: false,
      items: ["Email Newsletter", "Templates translation"]
    },
    {
      id: "5",
      title: "Finished",
      titleEditable: false,
      items: ["Code migration and merge"]
    }
  ])

  const handleClick = (e, groupIndex) => {
    let listCopy = [...list]
    listCopy[groupIndex].titleEditable = true
    changeList(listCopy)
  }

  const changeStyle = (groupIndex) => {
    if (list[groupIndex].titleEditable) {
      return "title__list--active"
    } else {
      return "title__list"
    }
  }

  const handleKeyPressed = (e, groupIndex) => {
    if (e.key === "Enter") {
      let listCopy = [...list]
      listCopy[groupIndex].title = e.target.value
      listCopy[groupIndex].titleEditable = false
      changeList(listCopy)
    }
  }

  const handleTaskCreation = (groupIndex) => {
    let listCopy = [...list]
    listCopy[groupIndex].items = [...listCopy[groupIndex].items, "New Task"]
    changeList(listCopy)
  }

  const handleFloatingMenu = () => {
    console.log("You have pressed the task!")
  }

  return (
    <div className="list__wrapper">
    {list.map((group, groupIndex) => (
      <div key={group.id} className="list" >
        <TitleList key={group.title} title={group.title}
          handleClick={e => handleClick(e, groupIndex)}
          changeStyle={changeStyle(groupIndex)}
          handleKeyPressed={e => handleKeyPressed(e, groupIndex)}
        />
          {group.items.map((item, itemIndex) => (
            <Task key={item} item={item}
              handleFloatingMenu={handleFloatingMenu}
            />
          ))}
        <TaskAdder handleTaskCreation={() => handleTaskCreation(groupIndex)} />
        </div>
      ))}
    </div>
  )
}

export default BoardList