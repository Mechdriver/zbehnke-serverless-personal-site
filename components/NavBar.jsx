import React from 'react'

class NavBar extends React.Component {
  render() {
    return (
      <div id="top" className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
          <a className="pure-menu-heading" href="#top">ZB</a>
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><a className="pure-menu-link" href="#background-container">About</a></li>
            <li className="pure-menu-item"><a className="pure-menu-link" href="#interests-section">Interests</a></li>
            <li className="pure-menu-item"><a className="pure-menu-link" href="#contact-section">Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }
};

export default NavBar;
