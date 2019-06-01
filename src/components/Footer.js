import React from 'react'
import { Link } from 'gatsby';
import { navItems } from './Navbar';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-white-ter">
          <section className="menu">
            <ul className="menu-list">
              {navItems.map((navItem, index) => 
                <li key={`footer-nav-item--${index}`}>
                  <Link className="navbar-item" to={navItem.url}>
                    {navItem.label}
                  </Link>
                </li>
              )}
            </ul>
            <p className="copyright">Copyright 2019 On Point BIM, LLC</p>
          </section>
        </div>
      </footer>
    )
  }
}

export default Footer
