import React from 'react';
import './Side.css';
import Okko from '../../Assets/imgs/okko.png';
import Pre from '../../Assets/imgs/pero.png';
import Pres from '../../Assets/imgs/peros.png';
import Des from '../../Assets/imgs/des.png';
const Side = () => {
  return (
    <div className='side__nav'>
      <div className="side__bar">
        <div className="side__text">
          <h3>Nega bizni tanlashadi</h3>
        </div>
        <div className="side__lists">
          <div className="side__box">
            <img src={Okko} />
            <h2>Yetkazib berish</h2>
            <p>Toshkent bo'ylab bepul 
              o'lchov va etkazib berish</p>
         </div>
         <div className="side__box">
          <img src={Pre} />
          <h2>Qo'llab-quvvatlash</h2>
          <p>Bizning qo'llab-quvvatlash xizmati sizga har qanday 
            savolda yordam beradi va menejerlarning </p>
          <span>+998 97 144-24-42</span>
        </div>
        <div className="side__box">
          <img src={Pres} />
          <h2>Kafolat</h2>
          <p>Biz matraslarimiz uchun 8 yilgacha kafolat beramiz.
             Agar matras kamida 25 mm qisqartirilsa.</p>
        </div>
        </div>
        <div className="side__up">
        <div className="side__down">
          <h3>Manzilimiz</h3>
          <p>Toshkent, Parkent ko'chasi, 176-uy</p>
          <span>Mo’ljal: Qoraqamish 2/1, Tursunxodjayeva 
            ro’parasi, Milliy <br /> bog’ metro bekati.</span>
            <button>Geolokatsiya</button>
        </div>
        <div className="side__image">
          <img src={Des} />
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Side;