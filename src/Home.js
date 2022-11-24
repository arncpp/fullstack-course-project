import homeBackground from './img/Home/homeBackground.jpg'
import './css/blocks/Home.css';


function Home() {
    return (
        <section className="Home">
            <div className="Header-container container">
                <div className="Home-content">
                    <h1 className="Home-heading">Play, Explore & Enjoy Games</h1>
                    <div className="Home-text"><p>From Chester Team for you with love.</p></div>
                    <div className="Home-button">
                        <a href="#">
                            <span>View games</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='Home-background-img background'>
                <img src={homeBackground} alt='Background color'></img>
            </div>
        </section>
    )
}

export default Home;