import React from 'react';
import './Footer.css'
import F from '../../Assets/imgs/f.png'
import Fone from '../../Assets/imgs/birds.png'
import Ftwo from '../../Assets/imgs/veco.png'
import Fthe from '../../Assets/imgs/you.png';
import Abe from '../../Assets/imgs/abe.png'
import Abes from '../../Assets/imgs/abes.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__section">
            <div className="footer__bars">
                <h3>Sizni qiziqtirdimi?</h3>
                <p>Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz</p>
            </div>
            <div className="footer__btn">
                <input type="text" placeholder='+998 | Raqamingizni kiriting' />
                <button>Yuborish</button>
            </div>
        </div>
        <div className="footer__down">
          <div className="footer__content">
            <div className="footer__side">
              <ul>
                <li>Biz haqimizda</li>
                <li>Katalog</li>
                <li>Aksiya</li>
                <li>Manzilimiz</li>
              </ul>
            </div>
            <div className="footer__icons">
              <img src={F} />
              <img src={Fone} />
              <img src={Ftwo} />
              <img src={Fthe} />
            </div>
           </div>
          <hr />
          <div className="footer__src">
            <div className="footer__text">
              <h2>© 2021 Mattrassue. Barcha huquqlar himoyalangan.</h2>
            </div>
            <div className="footer__image">
              <img src={Abes}  />
              <img className='footer__icon' src={Abe}   />
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer