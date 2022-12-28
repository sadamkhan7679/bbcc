import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoadingScreen from './loading'



function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])
  return (
    <>
        {loading === false ? (
            <div className="App">
              <BrowserRouter basename={process.env.PUBLIC_URL}>
                  <Switch>
                    <Route path='/' exact component={Home} />
                  </Switch>
              </BrowserRouter>
            </div>
              ) : (
                <LoadingScreen />
              )}
    </>
  );
}

export default App;
