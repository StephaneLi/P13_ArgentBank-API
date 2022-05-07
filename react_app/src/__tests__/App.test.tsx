/* eslint-disable jest/no-mocks-import */
import { render, screen } from '../utils/testRedux'
import { BrowserRouter as Router } from 'react-router-dom'
import { localStorageMock  } from '../__mocks__/localStorage'
import App from '../App'

import '../config/config.jest'

describe('When we call App component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock  });
  })
  afterAll(() => {
    window.localStorage.clear();
  });

  test('App All child Component should should be render', () => {
    render(<Router><App /></Router>)

    const DOMHeader = screen.getByTestId('header')
    const DOMHomePage = screen.getByTestId('features')
    const DOMFooter = screen.getByTestId('footer')
  
    expect(DOMHeader).toBeInTheDocument()
    expect(DOMHomePage).toBeInTheDocument()
    expect(DOMFooter).toBeInTheDocument()
  });

  test('App should search token in local storage', () => {
    jest.spyOn(window.localStorage, 'getItem');

    render(<Router><App /></Router>);

    expect(window.localStorage.getItem).toHaveBeenCalledWith('token')
  });

  test('App should not load data if have token expired in localStorage', () => {
    jest.spyOn(window.localStorage, 'getItem');
    window.localStorage.getItem = jest.fn().mockReturnValue(
      JSON.stringify({token: '123', ttl: '0'})
    )

    render(<Router><App /></Router>);

    const DOMHeader = screen.getByTestId('header')
    expect(DOMHeader).toBeInTheDocument()    
  });

  test('App should load data if have active token in localStorage', () => {
    jest.spyOn(window.localStorage, 'getItem');
    jest.spyOn(global, 'setTimeout');
    window.localStorage.getItem = jest.fn().mockReturnValue(
      JSON.stringify({token: '123', ttl: new Date().getTime() + '1000*1000'})
    )

    render(<Router><App /></Router>, {preloadedState: {
      user: {
        user: {
          firstName: 'firstname',
        },
        isAuthenticated: true,
        token: '1234',
      }
    }})

    const Loading = screen.getByText('Loading')
    expect(Loading).toBeInTheDocument()
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });

  test('App should render HomePage after Loading', async () => {
   
    render(<Router><App /></Router>, {preloadedState: {
      user: {
        isAuthenticated: false,
      }
    }});
  });
})