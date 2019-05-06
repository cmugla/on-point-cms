import React from 'react'
import { Link } from 'gatsby';
import { navItems } from './Navbar';

import logo from '../img/logo.jpg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <section className="menu">
              <ul className="menu-list">
                <li>
                  <Link to="/" className="navbar-item">
                    Home
                  </Link>
                </li>
                {navItems.map(navItem => 
                  <li>
                    <Link className="navbar-item" to={navItem.url}>
                      {navItem.label}
                    </Link>
                  </li>
                )}
              </ul>
            </section>
            <section>
              <ul className="menu-list">
                <li>
                  <Link className="navbar-item" to="/blog">
                    Latest Stories
                  </Link>
                </li>
                <li>
                  <a
                    className="navbar-item"
                    href="/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Admin
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
