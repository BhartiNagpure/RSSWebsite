import headerLogo from '../../Assests/img/headerLogo.png';
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export default function Header() {
  const location = useLocation()
  const homePage = location.pathname == '/';
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div>
      <nav className='navbar navbar-expand-lg p-0 position-absolute '>
        <div className="desktop-logo">
          <a className="navbar-brand" href="/">
            <img src={headerLogo} alt='' />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavbarOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={isNavbarOpen ? closeNavbar : toggleNavbar}
        >
          {isNavbarOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} /> 
          )}
        </button>

        <div
          className={`collapse navbar-collapse justify-content-center ${
            homePage ? '' : 'navbar-bg'
          } ${isNavbarOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav transparent-bg " onClick={closeNavbar}>
            <li className="nav-item ">
              <Link exact to='/' className="nav-link text-white" activeClassName='active'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/#about' className="nav-link text-white" activeClassName='active'>About</Link>
            </li>
            <li className="nav-item">
              <Link to='/ebook' className="nav-link text-white active" activeClassName='active'>E-Book</Link>
            </li>
            <li className="nav-item mobile-logo">
              <a className="navbar-brand" href="/">
                <img src={headerLogo} alt='' />
              </a>
            </li>
            <li className="nav-item">
              <Link to='/#aatmasanvad' className="nav-link text-white" activeClassName='active'>Aatmasanvad</Link>
            </li>
            <li className="nav-item">
              <Link to='/#events' className="nav-link text-white" activeClassName='active'>Events</Link>
            </li>
          </ul>
      
        </div>
      </nav>
    </div>
  );
}

           
