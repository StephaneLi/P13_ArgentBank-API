import React, { Fragment } from 'react';
import Features from '../../components/Features';
import Hero from '../../components/Hero';
import './style.scss';

const Home: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
    </Fragment>
  );
}

export default Home;
