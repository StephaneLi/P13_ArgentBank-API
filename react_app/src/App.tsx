import React, { useState, useEffect, Fragment } from 'react';
import RoutesApp from './routes/RoutesApp';

import { Route, Routes } from 'react-router-dom'
import { useLocation, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { State } from './store/stores';
import { UserActions } from './store/user.store';
import store from './store/stores';

import Header from './layout/Header'
import Footer from './layout/Footer'



const App: React.FunctionComponent = () => {
  const userState = useSelector((state: State) => state.user)
  const token = useSelector((state: State) => state.user.token)

  const location = useLocation()
  const [locationError, setLocationError] = useState<boolean>(false)  

  // Check token localStorage
  useEffect(() => {
    
    if(localStorage.getItem('token')) {
      const dataToken = JSON.parse(localStorage.getItem('token')!)
      console.log(Date.now() > dataToken.ttl)
      // Check exiration validity
      if(Date.now() > dataToken.ttl) {
        store.dispatch(UserActions.deleteToken(dataToken.token))
        localStorage.removeItem('token')
      } else {
        store.dispatch(UserActions.setToken(dataToken.token))
      }     
    }
  }, [])

  // AutoLogin if token logion success or token in localStorage
  useEffect(() => {
    if(token) store.dispatch(UserActions.getUserInfos(token))    
  }, [token])

  // Detect Error 404 page not found
  useEffect(() => {
    setLocationError( RoutesApp.getRouteByPathName(location.pathname) ? false : true)
  }, [location, locationError])

  return (
    <div className="react-app">
      <Header />
        <main>
          <Routes>
            { RoutesApp.routeList.map(({ path, Component, authRequired }) => (
              <Route key={path} path={path} element={
                <Fragment>
                  {authRequired && !userState.isAuthenticated ? (
                    <Navigate to={RoutesApp.getRouteByName('home')!.path} replace={true} />
                  ) : (
                    <Component />
                  )}                  
                </Fragment>
              } /> 
            ))}
          </Routes>
        </main>
        <Footer />  
    </div>
  );
}

export default App;
