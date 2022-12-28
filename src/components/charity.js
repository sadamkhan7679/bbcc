import React, {useEffect} from 'react';
import '../App.css';
import './charity.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Grid from '@material-ui/core/Grid';
import l1 from '../img/l1.webp';
import l2 from '../img/l2.webp';
import l3 from '../img/l3.webp';
import l4 from '../img/l4.webp';
import l5 from '../img/l5.webp';
import l6 from '../img/l6.webp';

  




function Charity() {
  useEffect(()=> {
    Aos.init({duration: 1000});
  }, []);
  return (
            <>
                <div id='Charity' className='Charity'>
                   <h1 data-aos='flip-up' className='charity-head'>CHARITY</h1>
                   <div className='charity-content-text'>
                   <h1 className='charity-subhead'>10% of all mint proceeds will be donated to 6 crypto-friendly charities that focus on basic necessities. The weighted average of DAO votes would be taken to arrive at the giveaway split.</h1>
                   </div>
                   <div className='CharityBox'>
                   <Grid container spacing={0} className='CharityGrid'>
                    <Grid item xs={6} md={3} sm={3}>
                      <div className='iconBoxCharity'>
                      <div className='charityIcon'>
                      <a href='https://www.cry.org/'  target='_blank'><img className='IconImgCharity' src={l1} alt="charity-icon-1" /></a>
                      </div>
                    </div>
                    </Grid>
                    <Grid item xs={6} md={3} sm={3} >
                    <div className='iconBoxCharity'>
                      <div className='charityIcon'>
                      <a href='https://shesthefirst.org/'  target='_blank'><img className='IconImgCharity' src={l2} alt="charity-icon-2" /></a>
                      </div>
                    </div>
                    </Grid>
                    <Grid item xs={6} md={3} sm={3}>
                    <div className='iconBoxCharity'>
                      <div className='charityIcon'>
                      <a href='https://www.redcross.org/'  target='_blank'><img className='IconImgCharity' src={l3} alt="charity-icon-3" /></a>
                      </div>
                    </div>
                    </Grid>
                    <Grid item xs={6} md={3} sm={3}>
                    <div className='iconBoxCharity'>
                      <div className='charityIcon'>
                      <a href='https://thewaterproject.org/'  target='_blank'><img className='IconImgCharity' src={l4} alt="charity-icon-4"/></a>
                      </div>
                    </div>
                    </Grid>
                    <Grid item xs={6} md={3} sm={3}>
                    <div className='iconBoxCharity'>
                      <div className='charityIcon'>
                      <a href='https://www.peta.org/'  target='_blank'><img className='IconImgCharity' src={l5} alt="charity-icon-5" /></a>
                      </div></div>
                    </Grid>
                    <Grid item xs={6} md={3} sm={3}>
                    <div className='iconBoxCharity'>
                      <div className='charityIcon'>
                      <a href='https://www.unicef.org/'  target='_blank'><img className='IconImgCharity' src={l6} alt="charity-icon-6" /></a>
                      </div>
                      </div>
                    </Grid>
                   </Grid>   
                   
                   <div className='textinsideCharityBox'>'
                   <h1 className='TextInsideCharity'>Dao members vote on which cause they wish to support.<br />We will take a weighted average of all the votes collected, and<br /> proportionately split the charity amount to ALL the charities selected.<br /> Doing our bit for each of these concerns that burden our planet.</h1>
                   </div>
                   </div>

                </div>
            </>

  );
}

export default Charity;
