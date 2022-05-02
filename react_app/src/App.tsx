import React, { useState, useEffect } from 'react';
import RoutesApp from './routes/RoutesApp';

import { Route, Routes, useNavigate } from 'react-router-dom'
import { useLocation, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { State } from './store/stores';
import { UserActions } from './store/user.store';
import store from './store/stores';

import Header from './layout/Header'
import Footer from './layout/Footer'

const App: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentRoute = RoutesApp.getRouteByPathName(location.pathname)

  const isAuthenticated = useSelector((state: State) => state.user.isAuthenticated)
  const token = useSelector((state: State) => state.user.token)
  
  const [locationError, setLocationError] = useState<boolean>(false)

  // Check token localStorage
  useEffect(() => {    
    if(localStorage.getItem('token')) {
      const dataToken = JSON.parse(localStorage.getItem('token')!)
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
    if(token) {
      try {
        store.dispatch(UserActions.getUserInfos(token))
      } catch {
        return
      }
    }
  }, [token, navigate])

  // Detect Error 404 page not found
  useEffect(() => {
    setLocationError( RoutesApp.getRouteByPathName(location.pathname) ? false : true)
  }, [location, locationError])

  return (
    <div className="react-app">
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
    </div>
  );
}

export default App;
