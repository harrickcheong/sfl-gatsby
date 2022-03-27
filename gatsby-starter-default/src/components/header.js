import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import Navbar from "./navbar"
// import '../styles/header.css'

const Header = ({ siteTitle, menuLinks }) => (
  <header
    // style={{
    //   background: `rebeccapurple`,
    //   marginBottom: `1.45rem`,
    // }}
  >
      <Link to="/">{siteTitle}</Link>
        <ul>
            {menuLinks.map(link => (
                <li key={link.name}>
                    <Link to={link.link}>{link.name}</Link>
                </li>
            ))}
        </ul>
  </header>
)


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
