import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ClipLoader from "react-spinners/ClipLoader";


function App() {
  /* const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)},8000)
    }, []) */
   

  return (
   /*  <div className='app'>
        {
        
        
        loading ? 
        ( 
          <div className='loader'>  
        <ClipLoader color={"#08A903"} loading={loading}  size={150} />
        <h1 className='loaderHead'>Big Block Car Club</h1>
        <h1 className='loaderDot'>Loading...</h1>
        </div>

        
        )
        : 
         (    <div className="App">
               <BrowserRouter basename={process.env.PUBLIC_URL}>
                   <Switch>
                     <Route path='/' exact component={Home} />
                   </Switch>
               </BrowserRouter>
             </div>
             )}

    </div> */
    <div className="App">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
