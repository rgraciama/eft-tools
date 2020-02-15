import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/1/19/Hideout_icon.png/70px-Hideout_icon.png?version=5027971ca1fa50f54bf2e40be2c108f0"
                alt="Hideout Conf Logo"
                className="img-fluid mb-2"
              />

              <h1>Hideout Management</h1>
              <Link className="btn btn-primary" to="/hideout">
                Start
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
