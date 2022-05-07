import { FunctionComponent } from 'react'
import { IAccount } from '../../interfaces/Account.store.intf'
import { numStr } from '../../utils/numberStr'
import Button, { ButtonStyle } from '../Button'

import './style.scss'

type AccountProps = {
  account : IAccount,
  className?: string
}

const Account: FunctionComponent<AccountProps> = ({account, className}) => {
  return (
    <section data-testid="account" className={`account ${className}`}>
    <div className="account__content">
      <h3 className="account__content__title">Argent Banck {account?.name} ({account?.accountId})</h3>
      <p className="account__content__amount">${ numStr(account?.sold!, ',')}</p>
      <p className="account__content__description">{account?.status}</p>
    </div>
    <div className="account__cta">
      <Button style={ButtonStyle.CTA} label="View transactions"/>
    </div>
  </section>
  );
}

export default Account
