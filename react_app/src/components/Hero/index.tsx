import { FunctionComponent, useState, useEffect } from 'react'

import './style.scss'

const Hero: FunctionComponent = () => {
  const [componentMount, setComponentMount] = useState<boolean>(false)
  
  useEffect(() => {
    setComponentMount(true)
  }, [])
  
  return (
  <div data-testid="hero" className={`hero ${!componentMount ? 'reveal' : ''}`}>
    <section className="hero__content reveal-1">
      <h2 className="sr-only">Promoted Content</h2>
      <p className="hero__content__subtitle">No fees.</p>
      <p className="hero__content__subtitle">No minimum deposit.</p>
      <p className="hero__content__subtitle">High interest rates.</p>
      <p className="hero__content__text">Open a savings account with Argent Bank today!</p>
    </section>
  </div>
  );
}

export default Hero
