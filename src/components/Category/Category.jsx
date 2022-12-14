import React from 'react';
import './Category.css';
import Card from '../../Assets/imgs/card.png';
import Imgs from '../../Assets/imgs/imgs.png';
import Yuz from '../../Assets/imgs/yuz.png';
import Yuzi from '../../Assets/imgs/kg.png';
import Narx from '../../Assets/imgs/narx.png';
import Savat from '../../Assets/imgs/savat.png';


const Main = () => {
  return (
    <div className="form__lines">
    <div className="form__box">
     <div className="form__hero">
      <div className="form__line">
      <div className="form__assets">
        <button>Yangi mahsulot</button>
        <img src={Card} />
      </div>
      <div className="form__asset">
        <h4>Prujinasiz lateksli matras</h4>
        <div className="form__lists">
          <div className="form__list">
            <span>Yuklama</span>
            <img className='form__num1' src={Yuz} />
            <img className='form__num' src={Yuzi} />
          </div>
          <div className="form__list">
            <span>Kafolat</span>
            <img className='form__num1' src={Yuz} />
            <img className='form__num' src={Yuzi} />
          </div>
          <div className="form__list">
            <span>O’lchami</span>
            <img  className='form__num1' src={Yuz} />
            <img  className='form__num' src={Yuzi} />
          </div>
          <div className="form__list">
            <span>Sig’imi</span>
            <img  className='form__num1' src={Yuz} />
            <img  className='form__num' src={Yuzi} />
          </div>
        </div>
        <p>Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum. Porttitor senectus lorem 
          rhoncus facilisi ac dictum varius egestas.</p>
          <img className='form__narx' src={Narx} />
          <img className='form__savat' src={Savat} />
        </div>
       </div>
      </div>
    </div>
    <div className="form__box">
     <div className="form__hero">
      <div className="form__line">
      <div className="form__assets">
        <button className='form__button'>Yangi mahsulot</button>
        <img src={Imgs} />
      </div>
      <div className="form__asset">
        <h4>Prujinasiz lateksli matras</h4>
        <div className="form__lists">
          <div className="form__list">
            <span>Yuklama</span>
            <img className='form__num1' src={Yuz} />
            <img className='form__num' src={Yuzi} />
          </div>
          <div className="form__list">
            <span>Kafolat</span>
            <img className='form__num1' src={Yuz} />
            <img className='form__num' src={Yuzi} />
          </div>
          <div className="form__list">
            <span>O’lchami</span>
            <img  className='form__num1' src={Yuz} />
            <img  className='form__num' src={Yuzi} />
          </div>
          <div className="form__list">
            <span>Sig’imi</span>
            <img  className='form__num1' src={Yuz} />
            <img  className='form__num' src={Yuzi} />
          </div>
        </div>
        <p>Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum. Porttitor senectus lorem 
          rhoncus facilisi ac dictum varius egestas.</p>
          <img className='form__narx' src={Narx} />
          <img className='form__savat' src={Savat} />
        </div>
       </div>
      </div>
    </div>
   
    </div>
   
  )
}
export default Main;