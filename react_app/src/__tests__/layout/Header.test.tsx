/* eslint-disable jest/no-mocks-import */
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import mockStore from '../../__mocks__/user.store'
import { Provider } from 'react-redux'
import Header from '../../layout/Header'
import '../../config/config.jest'

describe('When we call Header component', () => {
  test('Should render Layout Header component (user not authentified)', () => {
    render(
      <Provider store={mockStore.store()}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    const Element = screen.getByTestId('header')
    const ElementText = screen.getByText('Sign In')
    expect(Element).toBeInTheDocument()
    expect(ElementText).toBeInTheDocument()
  })
  test('Should render Layout Header component (user is authentified)', () => { 
    mockStore.store().dispatch(mockStore.actions.login())
    render(
      <Provider store={mockStore.store()}>
        <Router>
          <Header />
        </Router>
      </Provider>
    )
   
    const Element = screen.getByTestId('header')
    const ElementText = screen.getByText('Sign Out')
    expect(Element).toBeInTheDocument()
    expect(ElementText).toBeInTheDocument()
  });
})
