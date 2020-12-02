import React, {useEffect, useRef, useState} from "react";
import "./UserMenu.scss";
import {useHistory} from "react-router-dom";
import Cookies from "js-cookie";
import PropTypes from 'prop-types';
import avatar from '../../../../../assets/images/avatar.webp';

const UserMenu = () => {

  const [userMenu, setUserMenu] = useState(false);

  const history = useHistory();

  const userMenuRef = useRef(null);


  const changeUserMenuState = () => {
    setUserMenu(prevState => !prevState)
  };

  const closeUserMenu = () => {
    setUserMenu(false);
  };

  const [user, setUser] = useState({
    username: "",
    email: "",
    imageUrl: ""
  })

  useEffect(() => {
    const onDocumentBodyClick = (e) => {
      if (userMenuRef.current && userMenuRef.current.contains(e.target)) {
        return;
      }
      closeUserMenu()
    }
    document.body.addEventListener('click', onDocumentBodyClick)
    return function cleanup() {
      document.body.removeEventListener("click", onDocumentBodyClick);
    };
  }, [])

  useEffect(() => {
    //Get the user info from local storage
    const userInfo = localStorage.getItem('userInfo');
    //Cast userInfo to javascript object
    const userInfoObject = JSON.parse(userInfo);

    let userAvatar = avatar;

    if (userInfoObject.imageUrl) {
      userAvatar = userInfoObject.imageUrl
    }

    setUser({
      email: userInfoObject.email,
      username: userInfoObject.username,
      imageUrl: userAvatar
    })
  }, [])

  const onLogOutClick = () => {
    Cookies.remove("accessToken");
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('isAuthenticated');
    history.push("/login");
  }

  return (
      <div ref={userMenuRef}>
        <button
            style={{
              backgroundImage: `url(${user.imageUrl})`,
              backgroundSize: 'cover'
            }}
            className="boards-header__nav__user-button"
            onClick={() => changeUserMenuState()}
        />
        <div
            className={userMenu ? "boards-header__nav__user-menu__wrapper" : "boards-header__nav__user-menu__wrapper user-menu__hide"}>
          <h4 className="boards-header__nav__user-menu__title">Account</h4>
          <ul className="boards-header__nav__user-menu__list">
            <div className="boards-header__nav__user-menu__information__wrapper">
              <div className="boards-header__nav__user-menu__image"
                   style={{
                     backgroundImage: `url(${user.imageUrl})`,
                     backgroundSize: 'cover'
                   }}/>
              <div className="boards-header__nav__user-menu__data__wrapper">
                <p className="boards-header__nav__user-menu__name">{user.username}</p>
                <p className="boards-header__nav__user-menu__email">
                  {user.email}
                </p>
              </div>
            </div>
            <li className="boards-header__nav__user-menu__list__item" onClick={onLogOutClick}>Log out</li>
          </ul>
        </div>
      </div>
  );
};

UserMenu.propTypes = {
  toggleUserMenu: PropTypes.string,
}

export default UserMenu;
