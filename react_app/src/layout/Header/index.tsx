import React, { MouseEvent }  from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { RouteAppObject } from '../../interfaces/RouteApp.route.intf';
import { useSelector } from 'react-redux';
import { State } from '../../store/stores';
import store from '../../store/stores';
import { UserActions } from '../../store/user.store';

import imgLogo from './../../assets/argentBankLogo.png'
import colors from './../../sass/themes/_colors.module.scss';

import RoutesApp from '../../routes/RoutesApp.route';

import './style.scss'


const Header: React.FunctionComponent = () => {
  const navigate = useNavigate()

  const isAuthenticated = useSelector((state: State) => state.user.isAuthenticated)
  const user = useSelector((state: State) => state.user.user)

  const routeHome: RouteAppObject = RoutesApp.getRouteByName('home')!
  const routeProfile: RouteAppObject = RoutesApp.getRouteByName('profile')!
  const routeSignin: RouteAppObject = RoutesApp.getRouteByName('signin')!

  const handleLogout = (e: MouseEvent) => {
    e.preventDefault()
    store.dispatch(UserActions.logout({}))
    localStorage.removeItem('token')
    navigate(RoutesApp.getRouteByName('home')!.path)
  }

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
          {isAuthenticated ? (
            <div className="header__item">              
              <NavLink to={routeProfile?.path}>
                <i><FontAwesomeIcon color={colors.secondary} icon={faUserCircle} /></i>
                {user.firstName}
              </NavLink>
              <NavLink onClick={(e) => handleLogout(e)} to={routeHome?.path}>
                <i><FontAwesomeIcon color={colors.secondary} icon={faArrowRightFromBracket} /></i>
                Sign Out
              </NavLink>              
            </div>
          ) : (
            <div className="header__item">
              <NavLink to={routeSignin!.path}>
              <i><FontAwesomeIcon color={colors.secondary} icon={faUserCircle} /></i>          
              {routeSignin.label}
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
