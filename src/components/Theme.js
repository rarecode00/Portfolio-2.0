import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Theme() {
  const location = useLocation();
  const [show , setShow] = useState(true);

  const handleColor = (color) =>{
     document.documentElement.style.setProperty('--const-color' , color);    
  }

  return (
    <div className="theme">
     <div className={`theme-options`} style = {{display:location.pathname === '/' ? '' : 'none'}}>
        <div className='option color1' onClick={() =>{handleColor('green')}}></div>
        <div className='option color2' onClick={() =>{handleColor('red')}}></div>
        <div className='option color3' onClick={() =>{handleColor('blueviolet')}}></div>
     </div>
    </div>
  );
}

export default Theme;
