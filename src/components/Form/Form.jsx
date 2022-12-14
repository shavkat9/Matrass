import React from 'react';
import './Form.css';
import Ye from '../../Assets/imgs/y.png';
import Ke from '../../Assets/imgs/k.png';
import Uy from '../../Assets/imgs/u.png';
import Uch from '../../Assets/imgs/uch.png';
import Card from '../../Assets/imgs/card.png';
import Yuz from '../../Assets/imgs/yuz.png';
import Yuzi from '../../Assets/imgs/kg.png';
import Narx from '../../Assets/imgs/narx.png';
import Savat from '../../Assets/imgs/savat.png';


const Form = () => {
  return (
    <div className="form__box">
     <div className="form__section">
      <div className='form__body'>
       <img src={Ye}  /> 
       <p>yillik tajriba</p>
      </div>
      <div className='form__body'>
       <img src={Ke}  />
       <p>yillik tajriba</p>
      </div>
      <div className='form__body'>
       <img src={Uy}  />
       <p>yillik tajriba</p>
      </div>
      <div className='form__body'>
       <img src={Uch}  />
       <p>yillik tajriba</p>
      </div>
     </div>
     <h3>Bizning mahsulotlar</h3>
     <ul>
      <li>Barchasi</li>
      <li>Model A+</li>
      <li>Model B+</li>
      <li>Model C</li>
      <li>Model C+</li>
      <li>Model D</li>
      <li>Model Yevro</li>
      <li>Yangi tovarlar</li>
      <li>Model A</li>
     </ul>
     <hr />
     <div className="form__hero">
      <div className="form__line">
      <div className="form__assets">
        <button>Yangi mahsulot</button>
        <img src={Card} />
      </div>
      <div className="form__asset">
        <h4>Ortopedik Eko matras</h4>
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
  )
}

export default Form