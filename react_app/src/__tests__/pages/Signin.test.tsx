import React from 'react'
import { render, screen, fireEvent } from '../../utils/testRedux'
import SignIn from '../../pages/SignIn'

import '../../config/config.jest'


describe('When navigate on signin Page', () => {
  test('renders component Signin Page simple', () => {
    render(<SignIn /> );
  
    const Element = screen.getByTestId('signin')
    expect(Element).toBeInTheDocument()
  });
  
  test('User can loggin to his account', () => {
    render(<SignIn /> );

    const handleChange = jest.fn()
    const handleClick = jest.fn()

    const formEditUsername = screen.getByLabelText('Username')
    const formEditPassword = screen.getByLabelText('Password')
    const formEditRemember = screen.getByLabelText('Remember me')

    formEditUsername.addEventListener('change', handleChange) 
    formEditPassword.addEventListener('change', handleChange)  
    formEditRemember.addEventListener('click', handleClick)  

    fireEvent.change(formEditUsername, {target: {value: 'Test'}})
    fireEvent.change(formEditPassword, {target: {value: 'Test'}})
    fireEvent.click(formEditRemember)

    expect(handleChange).toHaveBeenCalled()
    expect(handleClick).toHaveBeenCalled()
  });

  test('User can save username', () => {
    render(<SignIn /> );

    const handleSubmit = jest.fn()
    const ButtonSubmit = screen.getByTestId('Sign In')    
    ButtonSubmit.addEventListener('click', handleSubmit)  

    fireEvent.click(ButtonSubmit)

    expect(ButtonSubmit).toBeInTheDocument()
    expect(handleSubmit).toHaveBeenCalled()
  });
})
