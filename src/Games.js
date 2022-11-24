import gamesBackground1 from './img/Games/gamesBackground1.jpg'
import gamesBackground2 from './img/Games/gamesBackground2.jpg'
import step01 from './img/Games/steps/step-1.jpg'
import step02 from './img/Games/steps/step-2.jpg'
import step03 from './img/Games/steps/step-3.jpg'
import step04 from './img/Games/steps/step-4.jpg'
import step05 from './img/Games/steps/step-5.jpg'
import step06 from './img/Games/steps/step-6.jpg'
import step07 from './img/Games/steps/step-7.jpg'
import step08 from './img/Games/steps/step-8.jpg'
import step09 from './img/Games/steps/step-9.jpg'
import step10 from './img/Games/steps/step-10.jpg'
import step11 from './img/Games/steps/step-11.jpg'
import step12 from './img/Games/steps/step-12.jpg'
import './css/blocks/Games.css';


function Games() {
    return (
        <section className='Games'>
            <div className='Games-container container'>
                <div className='Games-header-content'>
                    <h2 className='Games-header-heading'>Games</h2>
                </div>

                <div className='Games-store'>
                    <div className='Games-store-steps'> 

                        <div className='step'>
                            <img src={step01} alt='Game img' className='step-img'></img>
                            <h3 className='step-heading'>Strange Stories</h3>
                        </div>
                        {/* ---step--- */}


                        <div className='step'>
                            <img src={step02} alt='Game img' className='step-img'></img>
                            <h3 className='step-heading'>VHS Shop</h3>
                        </div>
                        {/* ---step--- */}

                        <div className='step'>
                            <img src={step03} alt='Game img' className='step-img'></img>
                            <h3 className='step-heading'>Alone In A Nightclub</h3>
                        </div>
                        {/* ---step--- */}

                        <div className='step'>
                            <img src={step04} alt='Game img' className='step-img'></img>
                            <h3 className='step-heading'>Lost Childhood</h3>
                        </div>
                        {/* ---step--- */}

                        <div className='step'>
                            <img src={step05} alt='Game img' className='step-img'></img>
                            <h3 className='step-heading'>Anime Hit</h3>
                        </div>
                        {/* ---step--- */}

                        <div className='step'>
                            <img src={step06} alt='Game img' className='step-img'></img>
                            <h3 className='step-heading'>Cyber Future</h3>
                        </div>
                        {/* ---step--- */}
                        <div className='step'>
                            <img src={step07} alt='Game img' className='step-img'></img>
                            <h3 className='step-heading'>Time Stood Still</h3>
                        </div>
                        {/* ---step--- */}
                        <div className='step'>
                            <img src={step08} alt='Game img' className='step-img'></img>
                            <h3 className='step-heading'>Car Pursuit</h3>
                        </div>
                        {/* ---step--- */}
                        <div className='step'>
                            <img src={step09} alt='Game img' className='step-img'></img>
                            <h3 className='step-heading'>Endless City</h3>
                        </div>
                        {/* ---step--- */}
                        
                    </div>

                    <div className='Games-header-content'>
                        <h2 className='Games-soon-heading'>Soon</h2>
                    </div>

                    <div className='Games-store-steps'>
                    <div className='step'>
                            <img src={step10} alt='Game img' className='step-img'></img>
                            <h3 className='step-heading'>Long Hallway</h3>
                        </div>
                        {/* ---step--- */}


                        <div className='step'>
                            <img src={step11} alt='Game img' className='step-img'></img>
                            <h3 className='step-heading'>Tiara Of Goodness</h3>
                        </div>
                        {/* ---step--- */}

                        <div className='step'>
                            <img src={step12} alt='Game img' className='step-img'></img>
                            <h3 className='step-heading'>Card Game</h3>
                        </div>
                        {/* ---step--- */}

                    </div>
                
                </div>

            
            </div>

            <div className='Games-background1-img background'>
                <img src={gamesBackground1} alt='Background color'></img>
            </div>

            <div className='Games-background2-img background'>
                <img src={gamesBackground2} alt='Background color'></img>
            </div>


        </section>




    )


}

export default Games;