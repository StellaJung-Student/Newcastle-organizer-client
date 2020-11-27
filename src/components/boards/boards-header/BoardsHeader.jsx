import React, {useState} from "react";
import "./BoardsHeader.scss";
import UserMenu from "./Subcomponents/user-menu/UserMenu";
import {Link} from "react-router-dom";

const BoardsHeader = () => {
  const [userMenu, changeUserMenu] = useState(false);

  const changeUserMenuState = () => {
    if (userMenu) {
      changeUserMenu(false);
    } else {
      changeUserMenu(true);
    }
  };

  const toggleUserMenu = () => {
    if (userMenu) {
      return "boards-header__nav__user-menu__wrapper";
    } else {
      return "boards-header__nav__user-menu__wrapper user-menu__hide";
    }
  };

  return (
    <header className="boards-header">
      <nav className="boards-header__nav">
        <Link to={"/"}><h2 className="boards-header__nav__title">Newcastle Organizer</h2></Link>
        <button
            className="boards-header__nav__user-button"
            onClick={() => changeUserMenuState()}
        />
        <UserMenu toggleUserMenu={toggleUserMenu()}/>
      </nav>
    </header>
  );
};

export default BoardsHeader;
