import React from 'react';
import { useSelector } from 'react-redux';
import Button, { ButtonStyle } from '../../components/Button';
import { IUserInfos } from '../../interfaces/User.store.intf'
import { State } from '../../store/stores';
import './style.scss'



const Profile: React.FunctionComponent = () => {
  const user: IUserInfos = useSelector((state: State) => state.user.user)

  return (
    <div className="container bg-dark profile">
      <div className="profile__header">
        <h1>Welcome back <br />{ user?.firstName } { user?.lastName }!</h1>
        <div className='profile__header__button'>
          <Button label="Edit Name"/>
        </div>        
      </div>
      <div className="profile__header">
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Lastname</label>
            <input onChange={(e) =>  {}} type="text" id="username" value={''} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Firstname</label>
            <input onChange={(e) =>  {}} type="password" id="password" value={''} />
          </div>
          <div className='profile__header__button'>
            <Button label="Save Profile"/>
          </div>  
        </form>
      </div>
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
