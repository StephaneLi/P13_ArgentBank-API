import { render, screen, fireEvent } from '../../utils/testRedux'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../../layout/Header'
import '../../config/config.jest'


describe('When we call Header component', () => {
  test('Should render Layout Header component (user not authentified)', () => {

    render(<Router><Header /></Router>, {preloadedState: {
      user: {
        isAuthenticated: false
      }
    }});

    const Element = screen.getByTestId('header')
    const ElementText = screen.getByText('Sign In')
    
    expect(Element).toBeInTheDocument()
    expect(ElementText).toBeInTheDocument()
  })
  
  test('Should render Layout Header component (user is authentified) with firstname', () => {   
    render(<Router><Header /></Router>, {preloadedState: {
      user: {
        user: {
          firstName: 'firstname'
        },
        isAuthenticated: true
      }
    }});
   
    const ElementText = screen.getByText('Sign Out')
    const ElementFirstname = screen.getByText('firstname')
    expect(ElementText).toBeInTheDocument()
    expect(ElementFirstname).toBeInTheDocument()
  });

  test('Should Signout if i can click on button logout', () => {   
    render(<Router><Header /></Router>, {preloadedState: {
      user: {
        user: {
          firstName: 'firstname'
        },
        isAuthenticated: true
      }
    }});

    const handleClick = jest.fn()  

    const ButtonSignout = screen.getByTestId('header-logout')
    ButtonSignout.addEventListener('click', handleClick)
    fireEvent.click(ButtonSignout)

    expect(handleClick).toBeCalled()
  });  
})
