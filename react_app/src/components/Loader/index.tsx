import { FunctionComponent } from 'react'

import './style.scss'

const Loader: FunctionComponent = () => {
  return (
    <div data-testid="loader" className="loading">
      <p>Loading</p>
    </div>
  );
}

export default Loader
