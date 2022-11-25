import logo from './img/Logo.png';
import linkedinLogo from './img/Footer/Linkedin.svg'
import instaLogo from './img/Footer/Insta.svg'
import youtubeLogo from './img/Footer/Youtube.svg'
import gmailLogo from './img/Footer/Gmail.svg'
import './css/blocks/Footer.css';

function Footer() {
    return (

        <footer className='Footer'>
            <div className='Footer-container container'>
                <div className='Footer-row'>


                    {/* <img src={logo} className= "Footer-logo" alt="Logo"/> */}
                    <nav className="Footer-navigation">
                        <ul>
                            <li><a className='Footer-menu'>Menu</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Developers</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </nav>

                    <nav className="Footer-social-networks">
                        <ul>
                            <li><a href='#'><img src={linkedinLogo} className= "social" alt="Logo"/></a></li>
                            <li><a href='#'><img src={instaLogo} className= "social" alt="Logo"/></a></li>
                            <li><a href='#'><img src={youtubeLogo} className= "social" alt="Logo"/></a></li>
                            <li><a href='#'><img src={gmailLogo} className= "social" alt="Logo"/></a></li>
                        </ul>
                    </nav>
                 

                </div>
            </div>
        </footer>


    )
}


export default Footer;