import React, {useEffect, useRef } from 'react';
import '../App.css';
import './traits.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Grid from '@material-ui/core/Grid';
import Graph from '../img/traits.webp';
import traitGif from '../img/preview.mp4';
  




function Traits() {
    
    useEffect(()=> {
      Aos.init({duration: 1000});
    
    }, []);
  return (
            <>
                <div id='traits' className='traits'>
                    <Grid container spacing={0} className='traitsBox'>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <h1 data-aos='flip-down' className='traits-head'>TRAITS</h1>
                            <div data-aos='zoom-in' className='Trait-Graph'>
                                <img className='graph' src={Graph} alt="graph-1" />
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} style={{    textAlign: '-webkit-center'}}>
                            <div className='trait-video-box'>
                               {/*<img className='gif-trait' src={traitGif} alt="treat" />*/}
                               <video className='gif-trait' src={traitGif} autoPlay loop muted />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </>

  );
}

export default Traits;
