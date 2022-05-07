import React, { useState, useEffect, Fragment } from 'react';
import RoutesApp from './routes/RoutesApp.route';

import { Route, Routes } from 'react-router-dom'
import { useLocation, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { State } from './store/stores';
import { UserActions } from './store/user.store';
import store from './store/stores';

import Header from './layout/Header'
import Footer from './layout/Footer'
import Loader from './components/Loader';

const App: React.FunctionComponent = () => {
  const location = useLocation()
  const currentRoute = RoutesApp.getRouteByPathName(location.pathname)

  const isAuthenticated = useSelector((state: State) => state.user.isAuthenticated)
  const token = useSelector((state: State) => state.user.token)
  
  const [locationError, setLocationError] = useState<boolean>(false)
  const [appIsLoading, setAppIsLoading] = useState<boolean>(false)
  const [displayLoader, setDisplayLoader] = useState<boolean>(false)

  // Check token localStorage
  useEffect(() => {
    if(localStorage.getItem('token')) {
      const dataToken = JSON.parse(localStorage.getItem('token')!)
      // Check exiration validity
      if(Date.now() > dataToken.ttl) {
        store.dispatch(UserActions.deleteToken(dataToken.token))
        localStorage.removeItem('token')
      } else {
        setAppIsLoading(true)
        setDisplayLoader(true)
        store.dispatch(UserActions.setToken(dataToken.token))
      }
    }
  }, [])

  // AutoLogin if token logion success or token in localStorage
  useEffect(() => {
    if(token) {
      try {
        store.dispatch(UserActions.getUserInfos(token))
          .finally(() => {            
            setAppIsLoading(false)
          })
      } catch {
        setAppIsLoading(false)
        return
      }
    }
  }, [token])

  // Hide Animation loader
  useEffect(() => {
    if(!appIsLoading) {
      const delay = 1000
      const timer = setTimeout(() => {
        setDisplayLoader(false)
        clearTimeout(timer)
      }, delay);
    }
  }, [appIsLoading])

  // Detect Error 404 page not found
  useEffect(() => {
    setLocationError( RoutesApp.getRouteByPathName(location.pathname) ? false : true)
  }, [location, locationError])

  return (
    <div className="react-app">
      {displayLoader ? (
        <div className={`page-loading ${!appIsLoading ? 'page-loading--hide' : ''}`}>
          <div className='sr-only'>is loading</div>
          <Loader />
        </div>
      ) : null}
      {!appIsLoading ? (
        <Fragment>
          <Header />
          { currentRoute?.authRequired && !isAuthenticated ? 
            ( <Navigate to={RoutesApp.getRouteByName('signin')!.path} replace={true} /> ) : null
          }        
          <main>
            <Routes>
              { RoutesApp.routeList.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} /> 
              ))}
            </Routes>
          </main>
          <Footer />
        </Fragment>
      ) : null}
    </div>
  );
}

export default App;
