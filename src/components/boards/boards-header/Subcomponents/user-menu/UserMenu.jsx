import React from "react";
import "./UserMenu.scss";
import {useHistory} from "react-router-dom"
import Cookies from "js-cookie";
import PropTypes from 'prop-types';

const UserMenu = ({ toggleUserMenu }) => {

  const history = useHistory();


  const onLogOutClick = () => {
    Cookies.remove("accessToken");
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('isAuthenticated');
    history.push("/login");
  }

  return (
      <div className={toggleUserMenu}>
        <h4 className="boards-header__nav__user-menu__title">Account</h4>
        <ul className="boards-header__nav__user-menu__list">
          <div className="boards-header__nav__user-menu__information__wrapper">
            <div className="boards-header__nav__user-menu__image"/>
            <div className="boards-header__nav__user-menu__data__wrapper">
              <p className="boards-header__nav__user-menu__name">Unsplash Girl</p>
              <p className="boards-header__nav__user-menu__email">
                unsplashgirl@gmail.com
              </p>
            </div>
          </div>
          <li className="boards-header__nav__user-menu__list__item" onClick={onLogOutClick}>Log out</li>
        </ul>
      </div>
  );
};

UserMenu.propTypes = {
  toggleUserMenu: PropTypes.string,
}

export default UserMenu;
