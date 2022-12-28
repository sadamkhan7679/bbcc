import React, {useEffect, useRef } from 'react';
import '../App.css';
import './roadmap.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Arrow from '../img/arrow.webp';
import roadmap from '../img/roadmap.webp';
import roadmap2 from '../img/roadmap2.webp';
  




function Roadmap() {
    useEffect(()=> {
        Aos.init({duration: 1000});
      }, []);
  return (
            <>
                <div id='roadmap' className='roadmap'>
                    <h1  className='roadmap-head'>1 YEAR ROADLAP <img className='arrowRoadmap' src={Arrow} /></h1>
                    <div className='roadmapBox'>
                        <img data-aos='zoom-in' className='roadmapImg' src={roadmap} alt="roadmap-1" />
                        <img  className='roadmapImgMob' src={roadmap2} alt="roadmap-2" />
                    </div>
                  
                </div>
            </>

  );
}

export default Roadmap;
