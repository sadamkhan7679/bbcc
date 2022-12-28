import React, {useEffect, useRef } from 'react';
import '../App.css';
import './HeroSection.css';
import 'aos/dist/aos.css';
import HeroVideo from '../img/heroVideo.webm';
import nft1 from '../img/1.webp';
import nft2 from '../img/2.webp';
import nft3 from '../img/3.webp';
import nft4 from '../img/4.webp';
import nft5 from '../img/5.webp';
import nft6 from '../img/6.webp';
import nft7 from '../img/7.webp';
import nft8 from '../img/8.webp';
import nft9 from '../img/9.webp';
import nft10 from '../img/10.webp';
import nft11 from '../img/11.webp';
import nft12 from '../img/12.webp';
import nft13 from '../img/13.webp';


  




function HeroSection() {
  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(()=> {
    attemptPlay();
  }, []);
  return (
            <>
              <div id='herosection' className='hero-container'>
                <div className='HeroBanner'>
                <video className='videoFrame' playsInline loop muted alt="All the devices"  ref={videoEl} src={HeroVideo}  /> 
                </div>
                <div className='cards-nft-scroll'>
                 
                  <div className="cards-wrapper">
                    <div className="card">
                      <div className='nft-img'>
                        <img className='nft' src={nft1} alt="nft-1" />
                      </div>
                    </div>
                    <div className="card">
                      <div className='nft-img'>
                        <img className='nft' src={nft2} alt="nft-2" />
                      </div>
                    </div>
                    <div className="card">
                      <div className='nft-img'>
                        <img className='nft' src={nft3} alt="nft-3" />
                      </div>
                    </div>
                    <div className="card">
                      <div className='nft-img'>
                        <img className='nft' src={nft4} alt="nft-4" />
                      </div>
                    </div>
                    <div className="card">
                      <div className='nft-img'>
                        <img className='nft' src={nft5} alt="nft-5" />
                      </div>
                    </div>
                    <div className="card">
                      <div className='nft-img'>
                        <img className='nft' src={nft6} alt="nft-6" />
                      </div>
                    </div>
                    <div className="card">
                      <div className='nft-img'>
                        <img className='nft' src={nft7} alt="nft-7" />
                      </div>
                    </div>
                    <div className="card">
                      <div className='nft-img'>
                        <img className='nft' src={nft8} alt="nft-8"/>
                      </div>
                    </div>
                    <div className="card">
                      <div className='nft-img'>
                        <img className='nft' src={nft9} alt="nft-9" />
                      </div>
                    </div>
                    <div className="card">
                      <div className='nft-img'>
                        <img className='nft' src={nft10} alt="nft-10" />
                      </div>
                    </div>
                    <div className="card">
                      <div className='nft-img'>
                        <img className='nft' src={nft11} alt="nft-11" />
                      </div>
                    </div>
                    <div className="card">
                      <div className='nft-img'>
                        <img className='nft' src={nft12} alt="nft-12" />
                      </div>
                    </div>
                    <div className="card">
                      <div className='nft-img'>
                        <img className='nft' src={nft13} alt="nft-13" />
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </>

  );
}

export default HeroSection;
