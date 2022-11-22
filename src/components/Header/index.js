import {Link} from 'react-router-dom'
import './index.css'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

const Header = () => (
  <nav className="navbar">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button className="trigger" type="button" testid="hamburgerIconButton">
          <GiHamburgerMenu className="menu" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="popup-container">
          <button
            className="trigger"
            type="button"
            testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose className="icon" />
          </button>
          <ul className="content-container">
            <Link to="/">
              <li>
                <button className="tab-button" type="button">
                  <AiFillHome className="icon" />
                  <p className="name">Home</p>
                </button>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <button className="tab-button" type="button">
                  <BsInfoCircleFill className="icon" />
                  <p className="name">About</p>
                </button>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </Popup>
  </nav>
)

export default Header
