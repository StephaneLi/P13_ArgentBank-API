import React, { Fragment } from 'react';
import Features from '../../components/Features';
import Hero from '../../components/Hero';

const Home: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
    </Fragment>
  );
}

export default Home;
