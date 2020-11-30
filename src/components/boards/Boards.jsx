import React, {useState} from "react";
import BoardsList from "./boards-list/BoardsList";
import "./Boards.scss";
import BoardsHeader from "./boards-header/BoardsHeader";
import ProjectCreate from "./board-create/ProjectCreate";

const Boards = () => {

  const [fakeRecentlyViewed] = useState([
    {
      title: "Personal project",
      description:
          "This project is about creating an illustrated book about a boy and his friends",
    },
    {
      title: "Personal project",
      description:
          "This project is about creating an illustrated book about a boy and his friends",
    },
    {
      title: "Personal project",
      description:
        "This project is about creating an illustrated book about a boy and his friends",
    },
    {
      title: "Personal project",
      description:
        "This project is about creating an illustrated book about a boy and his friends",
    },
    {
      title: "Personal project",
      description:
        "This project is about creating an illustrated book about a boy and his friends",
    },
    {
      title: "Personal project",
      description:
        "This project is about creating an illustrated book about a boy and his friends",
    },
  ]);


  const addPersonalBoard = () => {

  };


  return (
    <div className="boards__wrapper">
      <BoardsHeader/>
      <BoardsList
          recentlyViewedData={fakeRecentlyViewed}
          addPersonalBoard={() => addPersonalBoard()}
      />
      <ProjectCreate />
    </div>
  );
};


export default Boards;
