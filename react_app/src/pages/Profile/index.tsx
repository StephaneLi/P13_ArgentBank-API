import React, { useState, MouseEvent, useCallback, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import Button, { ButtonStyle } from '../../components/Button';
import { IUserInfos } from '../../interfaces/User.store.intf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { State } from '../../store/stores';
import store from '../../store/stores';
import { UserActions } from '../../store/user.store';
import { firstLetterUpper } from '../../utils/formatString';
import './style.scss'
import { AccountsActions } from '../../store/accounts.store';
import Loader from '../../components/Loader';
import Account from '../../components/Account';
import { IAccount } from '../../interfaces/Account.store.intf';

const Profile: React.FunctionComponent = () => {
  const [editProfile, setEditProfile] = useState<boolean>(false)
  const [formInputFirstName, setFormInputFirstName] = useState<string>('') 
  const [formInputLastName, setFormInputLastName] = useState<string>('') 

  const errorMessage = useSelector((state: State) => state.user.errorMessage )
  const user: IUserInfos = useSelector((state: State) => state.user.user)
  const token: string = useSelector((state: State) => state.user.token)
  const loading: boolean = useSelector((state: State) => state.user.loading)
  const account = useSelector((state: State) => state.account)
  const accounts = useSelector((state: State) => state.account.accounts)
  const [componentMount, setComponentMount] = useState<boolean>(false)

  // Load data Accounts
  useEffect(() => {
    if(accounts.length === 0) {
      store.dispatch(AccountsActions.getAccountsUser(token))
      .then(() => showAccounts())
    } else {
      showAccounts()
    }
  }, [token, accounts])

  const showAccounts = () => {
    const timer = setTimeout(() => {
      setComponentMount(true)
      clearTimeout(timer)
    }, 300)   
  }

  // Handle Escape edit
  const handleUserKeyPress = useCallback((evt: any) => {
    if(evt.key === "Escape" && editProfile) {
      setEditProfile(false)
    }
  }, [editProfile]);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  // Handle Button Edit
  const handleEditProfile = (e: MouseEvent) => {
    e.preventDefault()
    setEditProfile(!editProfile)
  }

  // Handle Button Save Name
  const handleSaveProfile = (e: MouseEvent) => {
    e.preventDefault()
    store.dispatch(UserActions.initErrorMessage({}))
    if(formInputFirstName !== '' && formInputLastName !== '') {
      store.dispatch(UserActions.updateUserInfos({
        firstName: firstLetterUpper(formInputFirstName),
        lastName: firstLetterUpper(formInputLastName),
        token
      }))
      .finally(() => {
        setEditProfile(false)
      })   
    }
  }

  // Handle Button Cancel
  const handleCancelProfile = (e: MouseEvent) => {
    e.preventDefault()
    if(editProfile) {
      setEditProfile(false)
      store.dispatch(UserActions.initErrorMessage({}))
    }
  }

  return (
    <div className="container bg-dark profile">
      { errorMessage ? (
        <div className="badge-alert">
          <FontAwesomeIcon icon={faCircleExclamation} />
          <p>{ `${errorMessage}` } </p>
        </div>
      ) : null}
      {editProfile ? (
        <div className="profile__header">
          <h1>Welcome back</h1>
          <form className="profile__header__edit">
            <div className="profile__header__edit__wrapper">
              <div className="input-wrapper">
                <label htmlFor="username">Lastname</label>
                <input onChange={(e) =>  setFormInputFirstName(e.currentTarget.value)} type="text" id="username" value={formInputFirstName} />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Firstname</label>
                <input onChange={(e) =>  setFormInputLastName(e.currentTarget.value)} type="text" id="password" value={formInputLastName} />
              </div>
            </div>
            <div className='profile__header__button'>
              <Button onClick={handleSaveProfile} isLoading={loading} label="Save Name"/>
              <Button onClick={handleCancelProfile} style={ButtonStyle.CANCEL} label="Cancel"/>
            </div>  
          </form>
        </div>
      ) : (
        <div className="profile__header">
          <h1>Welcome back <br />{ user?.firstName } { user?.lastName }!</h1>
          <div className='profile__header__button'>
            <Button onClick={handleEditProfile} label="Edit Name"/>
          </div>        
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <div className={`${!componentMount ? 'reveal' : ''}`}>
        {account.loading ? (
          <Loader />
        ) : (
          <Fragment>
            {accounts.map((item: IAccount, index: number) => (
              <Account className={`reveal-${index + 1}`} key={`account-${item.id}`} account={item}/>
            ))}
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default Profile;
