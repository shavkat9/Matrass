import React from 'react';
import './Header.css';
import Bed from '../../Assets/imgs/bed.png';
import Mat from '../../Assets/imgs/mat.png';
import Call from '../../Assets/imgs/call.png';
import Beds from '../../Assets/imgs/beds.png';

const Header = () => {
  return (
    <div className='header__section'>
        <div className="header__fonts">
            <img className='header__bed' src={Bed}  /> 
            <img  className='header__text' src={Mat}  />
           
        </div>
         <div className="header__end">
         <img className='header__tel' src={Call}  />
            <p>+998 90 123 45 67</p>
            <button className='header__btn'>Buyurtma berish</button>
         </div>
         <div className="header__titles">
            <span>Kechalari sokin <br /> dam oling</span> <br />
            <button>Kategoriyalar</button>
            <hr />
            <img src={Beds} />
         </div>
    </div>
  )
}

export default Header