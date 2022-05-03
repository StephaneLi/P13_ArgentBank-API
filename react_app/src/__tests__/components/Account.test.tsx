import { render, screen } from '@testing-library/react'
import Account from '../../components/Account'
import MockAccountData from '../../__fixtures/accounts_data.mock.json'
import { IAccount } from '../../interfaces/Account.store.intf'

import '../../config/config.jest'

test('renders component simple', () => {
  const mockAccount = MockAccountData.body[0] as IAccount

  render(<Account account={mockAccount}/>)
  const Element = screen.getByText('View transactions')
  expect(Element).toBeInTheDocument()
});
