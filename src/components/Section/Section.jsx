import React from 'react';
import './Section.css';
import Bg from '../../Assets/imgs/recten.png';
import Res from '../../Assets/imgs/res.png';
import Icon from '../../Assets/imgs/po.png'
const Section = () => {
  return (
    <div className='section'>
        <div className="section__bar">
            <h3>Ishlab chiqarish texnologiyalari</h3>
        </div>
        <div className="section__lists">
            <ul>
                <li>Memoriform</li>
                <li>Tabiiy lateks</li>
                <li>Mustaqil prujina</li>
            </ul>
        </div>
        <div className="section__box__main">
                <img src={Res} />
                <img src={Bg} />
                <img src={Res} />
                {/* <img className='section__icon' src={Icon} /> */}
        </div>
        <div className="section__title">
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
            <p>Aliquam euismod ornare justo, sed faucibus eu. Sed amet tellus netus quis bibendum. Euismod diam eu sem tristique aenean rhoncus.</p>
            <p>Enim urna consequat, justo, cras tincidunt imperdiet orci sodales. Dui purus feugiat morbi quam orci, vel. Elementum tincidunt blandit ultricies venenatis rhoncus.</p>
        </div>
    </div>
  )
}
export default Section;