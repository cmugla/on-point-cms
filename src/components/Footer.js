import React from 'react'
import { Link } from 'gatsby';
import { navItems } from './Navbar';

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
                {navItems.map((navItem, index) => 
                  <li>
                    <Link key={`footer-nav-item--${index}`} className="navbar-item" to={navItem.url}>
                      {navItem.label}
                    </Link>
                  </li>
                )}
              </ul>
            </section>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
