import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import '../styles/header.css'
import { useState } from 'react';

const Header = ({ siteTitle, menuLinks }) => {
    const [isActive, setActive] = useState(false);

    const openHam = () => {
        setActive(!isActive)
    };

    return(
  <header>
      <nav className="navbar">
          <h1 className="title">
            <Link to="/">{ siteTitle }</Link>
          </h1>
          <Link to="#" className="hamButton" onClick={openHam}>
              <span className="horizontal"/>
              <span className="horizontal"/>
              <span className="horizontal"/>
          </Link>
          <div className={`navbarLinks ${isActive ? 'navbarLinks-active' : ''}`}>
            <ul>
                {menuLinks.map(link => (
                    <li key={link.name}>
                        <Link to={link.link}>{link.name}</Link>
                    </li>
                ))}
            </ul>
          </div>
      </nav>
  </header>
)
}


Header.propTypes = {
  siteTitle: PropTypes.string,
    menuLinks: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
    menuLinks: {
        name:`Button`,
        link:'/'
    },
}

export default Header
