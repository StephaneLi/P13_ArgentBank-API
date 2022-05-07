import React from 'react';

import errorImg from '../../assets/error.png'
import './style.scss'

const Error: React.FunctionComponent = () => {
  return (
    <section data-testid='error' className='error'>
      <img width={100} src={errorImg} alt="error 404 page not found" />
      <h1>Erreur 404</h1>
      <p>The page you are looking for cannot be found</p>
    </section>
  );
}

export default Error;
