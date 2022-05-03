import React, { useState, MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import Button, { ButtonStyle } from '../../components/Button';
import { IUserInfos } from '../../interfaces/User.store.intf'
import { State } from '../../store/stores';
import store from '../../store/stores';
import { UserActions } from '../../store/user.store';
import { firstLetterUpper } from '../../utils/formatString';
import './style.scss'



const Profile: React.FunctionComponent = () => {
  const [editProfile, setEditProfile] = useState<boolean>(false)
  const [formInputFirstName, setFormInputFirstName] = useState<string>('') 
  const [formInputLastName, setFormInputLastName] = useState<string>('') 

  const user: IUserInfos = useSelector((state: State) => state.user.user)
  const token: string = useSelector((state: State) => state.user.token)
  const loading: boolean = useSelector((state: State) => state.user.loading)

  const handleEditProfile = (e: MouseEvent) => {
    e.preventDefault()
    setEditProfile(!editProfile)
  }

  const handleSaveProfile = (e: MouseEvent) => {
    e.preventDefault()
    if(formInputFirstName !== '' && formInputLastName !== '') {
      store.dispatch(UserActions.updateUserInfos({
        firstName: firstLetterUpper(formInputFirstName),
        lastName: firstLetterUpper(formInputLastName),
        token
      }))
      .then(() => {
        setEditProfile(false)
      })   
    } else {
      setEditProfile(false) 
    }
  }

  return (
    <div className="container bg-dark profile">
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
      <section className="account">
        <div className="account__content">
          <h3 className="account__content__title">Argent Bank Checking (x8349)</h3>
          <p className="account__content__amount">$2,082.79</p>
          <p className="account__content__description">Available Balance</p>
        </div>
        <div className="account__cta">
          <Button style={ButtonStyle.CTA} label="View transactions"/>
        </div>
      </section>
      <section className="account">
        <div className="account__content">
          <h3 className="account__content__title">Argent Bank Checking (x8349)</h3>
          <p className="account__content__amount">$2,082.79</p>
          <p className="account__content__description">Available Balance</p>
        </div>
        <div className="account__cta">
          <Button style={ButtonStyle.CTA} label="View transactions"/>
        </div>
      </section>
      <section className="account">
        <div className="account__content">
          <h3 className="account__content__title">Argent Bank Checking (x8349)</h3>
          <p className="account__content__amount">$2,082.79</p>
          <p className="account__content__description">Available Balance</p>
        </div>
        <div className="account__cta">
          <Button style={ButtonStyle.CTA} label="View transactions"/>
        </div>
      </section>
    </div>
  );
}

export default Profile;
