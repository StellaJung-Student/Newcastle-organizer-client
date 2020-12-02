import React from "react";
import "./BoardsHeader.scss";
import UserMenu from "./Subcomponents/user-menu/UserMenu";
import {Link} from "react-router-dom";

const BoardsHeader = () => {
  return (
    <header className="boards-header">
      <nav className="boards-header__nav">
        <Link to={"/"}><h2 className="boards-header__nav__title">Newcastle Organizer</h2></Link>
        <UserMenu />
      </nav>
    </header>
  );
};

export default BoardsHeader;
