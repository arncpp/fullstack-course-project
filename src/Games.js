import gamesBackground1 from './img/Games/gamesBackground1.jpg'
import gamesBackground2 from './img/Games/gamesBackground2.jpg'
import step01 from './img/Games/steps/step-01.jpg'
import './css/blocks/Games.css';


function Games() {
    return (
        <section className='Games'>
            <div className='Games-container container'>
                <div className='Games-header-content'>
                    <h2 className='Games-header-heading'>Games</h2>
                </div>
                <div className='Games-store'>

                    <div className='step'>

                        <img src={step01} alt='Game img' className='step-img'></img>


                        <h3 className='step-heading'>Strange Stories</h3>
                    </div>
                    {/* ---step--- */}
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