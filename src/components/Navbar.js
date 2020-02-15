import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import logo from '../images/nota.svg';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Escape From Tarkov</span>
            <span className="font-weight-bold">Tool</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
