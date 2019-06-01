import React from 'react'
import { Link } from 'gatsby'

export const navItems = [
  {
    label: 'About',
    url: '/about'
  },
  {
    label: 'Services',
    url: '/services'
  },
  {
    label: 'Contact',
    url: '/contact'
  },
]

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              ON POINT
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              {navItems.map((navItem, index) => 
                <Link key={`header-nav-item--${index}`} className="navbar-item" to={navItem.url}>
                  {navItem.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
