import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import imgLogo from './../../assets/argentBankLogo.png'
import colors from './../../sass/themes/_colors.module.scss';

import './style.scss'

const Header: React.FunctionComponent = () => {
  return (
    <header className="header">
      <nav>
        <a className="header__logo" href="./#">
          <img
            className="header__logo__img"
            src={imgLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="header__item" href="./#">
            <i>
              <FontAwesomeIcon color={colors.secondary} icon={faUserCircle} />
            </i>          
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
