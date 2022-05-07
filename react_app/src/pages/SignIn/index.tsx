import React, { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import store, { State } from '../../store/stores';
import { UserActions } from '../../store/user.store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import RoutesApp from '../../routes/RoutesApp.route';

import colors from './../../sass/themes/_colors.module.scss';
import './style.scss'
import Button, { ButtonStyle } from '../../components/Button';


const SignIn: React.FunctionComponent = () => {
  const errorMessage = useSelector((state: State) => state.user.errorMessage )
  const loading = useSelector((state: State) => state.user.loading )
  const token = useSelector((state: State) => state.user.token )
  const isAuthenticated = useSelector((state: State) => state.user.isAuthenticated )

  const [formInputEmail, setFormInputEmail] = useState<string>('') 
  const [formInputPassword, setFormInputPassword] = useState<string>('') 
  const [formInputRemember, setFormInputRemember] = useState<boolean>(false) 
  const [componentMount, setComponentMount] = useState<boolean>(false)

  /**
   * Init error message onmount Component
   */
  useEffect(() => {
    setComponentMount(true)
    store.dispatch(UserActions.initErrorMessage({}))
  }, [])

  /**
   * Save token in local storage if Remember checkbox
   */
  useEffect(() => {
    if(formInputRemember && isAuthenticated && token) {
      const now = new Date()
      const ttl = (24*60*60*30) // One month in seconds
      const value = {
        token: token,
        ttl: now.getTime() + ttl,
      }
      localStorage.removeItem('token')
      localStorage.setItem('token', JSON.stringify(value))
    }
  }, [formInputRemember, isAuthenticated, token])

  /**
   * Submit Form Login function
   */
    const submitLogin = async (e: React.MouseEvent) => {
    e.preventDefault()
    store.dispatch(UserActions.login({email: formInputEmail, password: formInputPassword}))
  }

    
  // if user is defined on store redirect to profile page
  if (isAuthenticated) 
  return (
    <Navigate to={RoutesApp.getRouteByName('profile')!.path} replace={true} />
  )
  
  return (
    <div data-testid="signin" className={`container bg-dark signin ${!componentMount ? 'reveal' : ''}`}>
      <section className="signin__content reveal-4">
        <div className={`badge-alert ${errorMessage ? 'badge-alert--show' : ''}`}>
        {errorMessage ? ( 
          <Fragment>         
            <FontAwesomeIcon icon={faCircleExclamation} />
            <p>{ `${errorMessage}` } </p>
          </Fragment>           
        ) : null}
        </div>
        <i className='signin__icon'>
          <FontAwesomeIcon color={colors.secondary} icon={faUserCircle} />
        </i>  
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input onChange={(e) =>  setFormInputEmail(e.currentTarget.value)} type="text" id="username" value={formInputEmail} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input onChange={(e) =>  setFormInputPassword(e.currentTarget.value)} type="password" id="password" value={formInputPassword} />
          </div>
          <div className="input-remember">
            <input type="checkbox" onChange={() => setFormInputRemember(!formInputRemember)} id="remember-me" checked={formInputRemember} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button onClick={submitLogin} style={ButtonStyle.CTA} label='Sign In' isLoading={loading} />
        </form>
      </section>
    </div>
  );
}

export default SignIn;
