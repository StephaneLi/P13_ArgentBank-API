import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { RouteAppObject } from '../../interfaces/RouteAppObject.intf';

import imgLogo from './../../assets/argentBankLogo.png'
import colors from './../../sass/themes/_colors.module.scss';

import RoutesApp from '../../routes/RoutesApp';

import './style.scss'


const Header: React.FunctionComponent = () => {
  const routeHome: RouteAppObject = RoutesApp.getRouteByName('home')!
  const routeSignin: RouteAppObject = RoutesApp.getRouteByName('signin')!

  return (
    <header className="header">
      <nav>
        <div className="header__logo">
          <NavLink to={routeHome.path}>
            <img
              className="header__logo__img"
              src={imgLogo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </NavLink>
        </div>
        <div>
          <div className="header__item">
            <NavLink to={routeSignin!.path}>
            <i><FontAwesomeIcon color={colors.secondary} icon={faUserCircle} /></i>          
            {routeSignin.label}
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
