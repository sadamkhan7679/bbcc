import React, {useEffect, useRef } from 'react';
import '../App.css';
import './attributes.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import attribute from '../img/attributes.webp';
import attribute2 from '../img/mob-attribute.webp';
  




function Attributes() {
  useEffect(()=> {
    Aos.init({duration: 1000});
  }, []);

  return (
            <>
                <div id='attribute' className='attribute'>
                   <img data-aos='zoom-in' className='attributeImg' src={attribute} alt="attribute-1" />
                   <img data-aos='zoom-in' className='attributeImg2' src={attribute2} alt="attribute-2" />
                </div>
            </>

  );
}

export default Attributes;
