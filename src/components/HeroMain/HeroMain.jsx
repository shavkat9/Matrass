import React from 'react';
import './HeroMain.css';
import Bkg from '../../Assets/imgs/bkg.png';
import Black from '../../Assets/imgs/black.png'
const HeroMain = () => {
  return (
    <div className='hero__texts'>
        <div className="hero__text">
            <div className="hero__content">
                <h2>Mattrassue kompaniyasi <br /> haqida</h2>
                <p>Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing ut sed pulvinar
                     tellus, ut urna, fermentum:</p>
                <div className="hero__box">
                    <ul>
                        <li>Penatibus viverra gravida rhoncus in.</li>
                        <li>Dolor integer in interdum viverra risus dolor enim.</li>
                        <li>Turpis senectus eu, eget aenean nulla pellentesque sed ut tempor.</li>
                    </ul>
                </div>
            </div>
            <div className="hero__img">
                <img src={Bkg} />
            </div>
        </div>
        <div className="hero__session">
             <div className="hero__png">
                <img src={Black} />
             </div>
             <div className="hero__body">
                <h4>Libero erat praesent ullamcorper eget tortor sed et. Nec id lobortis gravida vitae. Scelerisque id fusce vitae ut. Integer sed vulputate sed nec. Arcu id mattis erat et.</h4>
                <div className="hero__master">
                    <ol>
                        <li>Id risus phasellus laoreet eget. A nec pulvinar.</li>
                        <li>Eu justo, tincidunt fringilla diam nulla.</li>
                        <li>Amet, nullam cras lacus, fermentum leo tellus sagittis.</li>
                        <li>Facilisi mauris condimentum sagittis odio rhoncus semper.</li>
                    </ol>
                   
                </div>
                <p>Ac tortor volutpat pellentesque mauris nisi, praesent. Et tempus accumsan est elementum feugiat arcu mauris tincidunt. Eget faucibus pharetra et luctus eget ut fames. A cursus elementum egestas
                         eu scelerisque id.</p>
             </div>
        </div>
    </div>
  )
}

export default HeroMain;