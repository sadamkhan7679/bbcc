import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Insta from '../img/Instagram.webp';
import Twi from '../img/Twitter.webp';
import Dis from '../img/Discord.webp';
import logo from '../img/logo.webp';
import iconWallet from '../img/iconWallet.webp'
import Tooltip from '@mui/material/Tooltip';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [logoImage, setLogoImage] = useState({
    src: logo,
  });

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //preload logo
  useEffect(() => {
    const img = new Image();
    img.src = logo;
    setLogoImage(img);
  }, []);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
     
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='left-Nav'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <img className='logo-big' src={logoImage.src} alt="Logo" loading="eager" />
            </Link>
            <div className='socials'>
              <a href='https://discord.com/invite/bigblockcarclub'  target='_blank'><img className='SocialIcon' src={Dis} alt="social icon discord" /></a>
              <a href='https://twitter.com/Bigblockcarclub'  target='_blank'><img className='SocialIcon' src={Twi} alt="social icon twitter" /></a>
              <a href='https://www.instagram.com/bbcc.nft/'  target='_blank'><img className='SocialIcon' src={Insta} alt="social icon insta" /></a>
            </div>
          </div>
         
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <a
                href='#high'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Collection
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#utility'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Utility
              </a>
            </li>
           
            <li className='nav-item'>
              <a
                href='#roadmap'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Roadlap
              </a>
            </li>
            <li className='nav-item'>
            <a
                href='#pitcrew'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Team
              </a>
            </li>
          
          
            <li className='nav-item'>
            <Tooltip title={<h1 style={{ fontSize: '16px', letterSpacing: '0.09em', fontWeight: '400' }}>Coming Soon</h1>} placement="bottom">
              <a
                href='#'
                className='wallet'
                onClick={closeMobileMenu}
              >
                Mint<span> <img className='icon-wallet' src={iconWallet} alt="icon-wallet" /> </span>
              </a>
              </Tooltip>
            </li>
           
          </ul>
          
        </div>
      </nav>
      
      </>
  );
}

export default Navbar;
