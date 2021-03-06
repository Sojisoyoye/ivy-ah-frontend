import React from 'react';
import propTypes from 'prop-types';
import CategoryMenuContainer from '../containers/CategoryMenuContainer';
import AuthButtonContainer from '../containers/AuthButtonContainer';

const SideMenu = ({ onCloseMenu, setMenuRef, closeMenu }) => (
  <div ref={setMenuRef} onTransitionEnd={closeMenu} className="side-menu-container">
    <div className="close-menu-button container">
      <button type="button" onClick={onCloseMenu} className="close-menu-button">
        <i className="angle left icon" />
      </button>
    </div>
    <AuthButtonContainer
      onClick={onCloseMenu}
      loginClass="ui button signin-btn side-menu"
      signupClass="ui button signup-btn side-menu"
      containerClass="auth-container side-menu"
    />
    <CategoryMenuContainer />
    <button type="button" className="side-menu button primary upgrade">
      Upgrade to premium
      <i className="star icon" />
    </button>
    <button type="button" className="side-menu button primary">Contact us</button>
    <button type="button" className="side-menu button primary">About</button>
    <button type="button" className="side-menu button primary">Meet the team</button>
    <button type="button" className="side-menu button primary">Privacy policy</button>
    <p className="side-menu footer text">
      {"Copyright Authors' Haven"}
    </p>
  </div>
);

SideMenu.propTypes = {
  onCloseMenu: propTypes.func.isRequired,
  setMenuRef: propTypes.func.isRequired,
  closeMenu: propTypes.func.isRequired
};


export default SideMenu;
