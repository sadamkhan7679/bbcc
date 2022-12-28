import React, {useEffect, useRef } from 'react';
import '../App.css';
import './loader.css';
import loader from '../img/logo.webp';

  




function Loader() {
  

  return (
            <>
                <div className='LOADER'>
                    <img className='loading-logo' src={loader} />
                    <h1 className='textLoading'>
                        Loading...
                    </h1>
                </div>
            </>

  );
}

export default Loader;
