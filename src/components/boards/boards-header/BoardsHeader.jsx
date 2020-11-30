import React, {useEffect, useRef, useState} from "react";
import "./BoardsHeader.scss";
import UserMenu from "./Subcomponents/user-menu/UserMenu";
import {Link} from "react-router-dom";

const BoardsHeader = () => {
  const [userMenu, setUserMenu] = useState(false);

  const userMenuRef = useRef(null);

  useEffect(() => {
    const onDocumentBodyClick = (e) => {
      if (userMenuRef.current && userMenuRef.current.contains(e.target)) {
        return;
      }
      closeUserMenu()
    }
    document.body.addEventListener('click', onDocumentBodyClick)
  }, [])

  const changeUserMenuState = () => {
    setUserMenu(prevState => !prevState)
  };

  const closeUserMenu = () => {
    if (userMenu === true) {
      setUserMenu(false);
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
        <button ref={userMenuRef}
                className="boards-header__nav__user-button"
                onClick={() => changeUserMenuState()}
        />
        <UserMenu toggleUserMenu={toggleUserMenu()}/>
      </nav>
    </header>
  );
};

export default BoardsHeader;
