import React, {useEffect, useRef } from 'react';
import '../App.css';
import './footer.css';
import 'aos/dist/aos.css';
import Grid from '@material-ui/core/Grid';
import discordf from '../img/Discordf.webp';
import twitterf from '../img/Twitterf.webp';
import instagramf from '../img/Instagramf.webp';
import telegramf from '../img/Telegramf.webp';
import mediumf from '../img/mediumf.webp';




function Attributes() {
  return (
            <>
                <div id='footer' className='footer'>
                    <Grid container spacing={0} className='footerContact'>
                        <Grid item xs={2} md={2} sm={2}>
                        <a href='https://discord.com/invite/bigblockcarclub' target='_blank'><div className='iconFooterbox'>
                                <img className='footerIcon' src={discordf} alt="footer-discord" />
                            </div></a>
                        </Grid>
                        <Grid item xs={2} md={2} sm={2}>
                        <a href='https://twitter.com/Bigblockcarclub'  target='_blank'><div className='iconFooterbox'>
                                <img className='footerIcon' src={twitterf} alt="footer-twitter" />
                            </div></a>
                        </Grid>
                        <Grid item xs={2} md={2} sm={2}>
                        <a href='https://www.instagram.com/bbcc.nft/'  target='_blank'> <div className='iconFooterbox'>
                                <img className='footerIcon' src={instagramf} alt="footer-insta"/>
                            </div></a>
                        </Grid>
                        <Grid item xs={2} md={2} sm={2}>
                        <a href='https://t.me/+R3dekAWAAnFkNWY1'  target='_blank'><div className='iconFooterbox'>
                                <img className='footerIcon' src={telegramf} alt="footer-telegram" />
                            </div></a>
                        </Grid>
                        <Grid item xs={2} md={2} sm={2}>
                        <a href='https://medium.com/@BigBlockCarClub'  target='_blank'><div className='iconFooterbox'>
                                <img className='footerIcon' src={mediumf} alt="footer-medium" />
                            </div></a>
                        </Grid>
                    </Grid>  
                    <h1 className='footer-end'>© BIGBLOCKCARCLUB 2022</h1>          
                </div>
            </>

  );
}

export default Attributes;
