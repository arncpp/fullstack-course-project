import logo from './img/Logo.png';
import search from './img/Search.svg'
import './css/blocks/Header.css';

function Header() {
  return (
<header className="Header">
    <div className="Header-container container">
        <div className="Header-row">
            <img src={logo} className= "Header-logo" alt="Logo"/>
            <nav className="Header-navigation">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <div className="Header-search">
                <img src={search} className= "Header-search-icon" alt="Search"/>
                <a href="#">Search</a>
            </div>
            <div className="Header-login">
                <a href="#">Sign in</a>
            </div>
        </div>
    </div>
</header>
  );

}

export default Header;