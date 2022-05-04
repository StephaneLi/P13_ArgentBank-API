import { FunctionComponent } from 'react'

import './style.scss'

const Footer: FunctionComponent = () => {
  return (
    <footer data-testid="footer" className="footer">
      <p className="footer__text">Copyright 2020 Argent Bank</p>
    </footer>
  );
}

export default Footer
