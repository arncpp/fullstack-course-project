import developersBackground from './img/Developers/developersBackground.jpg'
import Danila from './img/Developers/list/danila.jpg'
import Ariana from './img/Developers/list/ariana.jpg'
import MaximLuk from './img/Developers/list/maximluk.jpg'
import MaximVas from './img/Developers/list/maximvas.jpg'
import Anton from './img/Developers/list/anton.jpg'
import Michael from './img/Developers/list/michael.jpg'
import Maria from './img/Developers/list/mariia.jpg'
import Anastasia from './img/Developers/list/anastasia.jpg'

import './css/blocks/Developers.css';

function Developers() {
    return (
        <section className='Developers'>
            <div className='Developers-container container'>
                <div className='Developers-header-content'>
                    <h2 className='Developers-header-heading'>Developers</h2>
                </div>

                <div className='Developers-list'>
                    <div className='Developers-list-steps'>

                        <div className='developer-step'>
                            <img src={Danila} className= "developer-img" alt="Developer"/>
                            <a href="#" className='developer-position'>Daniel
                                <p className='position'>Team Lead</p>
                            </a>
                        </div>
                        {/* ---step--- */}

                        <div className='developer-step'>
                            <img src={Ariana} className= "developer-img" alt="Developer"/>
                            <a href="#" className='developer-position'>Ariana
                                <p className='position'>Coder</p>
                            </a>
                        </div>
                        {/* ---step--- */}

                        <div className='developer-step'>
                            <img src={MaximLuk} className= "developer-img" alt="Developer"/>
                            <a href="#" className='developer-position'>Maxim
                                <p className='position'>Coder</p>
                            </a>
                        </div>
                        {/* ---step--- */}

                        <div className='developer-step'>
                            <img src={Anton} className= "developer-img" alt="Developer"/>
                            <a href="#" className='developer-position'>Anton
                                <p className='position'>Coder</p>
                            </a>
                        </div>
                        {/* ---step--- */}

                        <div className='developer-step'>
                            <img src={Michael} className= "developer-img" alt="Developer"/>
                            <a href="#" className='developer-position'>Michael
                                <p className='position'>DevOps</p>
                            </a>
                        </div>
                        {/* ---step--- */}

                        <div className='developer-step'>
                            <img src={Maria} className= "developer-img" alt="Developer"/>
                            <a href="#" className='developer-position'>Mariia
                                <p className='position'>Designer</p>
                            </a>
                        </div>
                        {/* ---step--- */}

                        <div className='developer-step'>
                            <img src={Anastasia} className= "developer-img" alt="Developer"/>
                            <a href="#" className='developer-position'>Nastya
                                <p className='position'>Designer</p>
                            </a>
                        </div>
                        {/* ---step--- */}

                        <div className='developer-step'>
                            <img src={MaximVas} className= "developer-img" alt="Developer"/>
                            <a href="#" className='developer-position'>Maxim
                                <p className='position'>Economist</p>
                            </a>
                        </div>
                        {/* ---step--- */}

                    </div>
                </div>

                <div className='Developers-footer-content'>
                    <h3 className='Developers-footer-heading'>
                    <span className='Developers-footer-heading-chester'>Chester </span> 
                    <span className='Developers-footer-heading-team-appreciate'> Team </span> 
                     is a 
                    <span className='Developers-footer-heading-small'> small </span>
                      but 
                    <span className='Developers-footer-heading-friendly'> friendly </span> 
                    team that makes 
                    <span className='Developers-footer-games'> games </span>
                     for you. 
                    We 
                    <span className='Developers-footer-heading-team-appreciate'> appreciate </span> 
                    and 
                    love
                     our audience, 
                    and we try to convey this <span className='Developers-footer-love'> love </span> to 
                    <span className='Developers-footer-you'> you </span>. 
                    A lot of new projects will be released 
                    soon that will please you <span className='Developers-footer-and'> and </span> bring 
                    you 
                    <span className='Developers-footer-pleasure'> pleasure</span>
                    . With love, <span className='Developers-footer-Chester'> Chester </span> 
                    <span className='Developers-footer-Team'> Team</span>
                    </h3>

                </div>


            </div>


            <div className='Developers-background background'>
                <img src={developersBackground} alt='Background color'></img>
            </div>
        </section>
    )
}

export default Developers;