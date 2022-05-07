import React from 'react'
import { render, screen, fireEvent, waitFor } from '../../utils/testRedux'
import Profile from '../../pages/Profile'

import '../../config/config.jest'

describe('When navigate on profile page', () => {
  test('should renders component Profile Page simple', () => {
    render(<Profile />)
    
    const Element = screen.getByTestId('profile')
    expect(Element).toBeInTheDocument()
  });

  test('should render user name on page', () => {
    render(<Profile />, {preloadedState: {
      user: {
        user:{
          firstName: 'firstname',
          lastName: 'lastname'
        }
      },
    }})

    const userNameText = screen.getByTestId('username')
    expect(userNameText.textContent).toContain('firstname')
    expect(userNameText.textContent).toContain('lastname')
  })

  test('should show user accounts', () => {
    render(<Profile />, {preloadedState: {
      user: {
        user:{
          firstName: 'firstname',
          lastName: 'lastname'
        }
      },
    }})

    const userNameText = screen.getByTestId('accounts')
    expect(userNameText.textContent).toContain('x0000')
  })

 
  test('user can edit his name', async () => {
    render(<Profile />, {preloadedState: {
      user: {
        user:{
          firstName: 'firstname',
          lastName: 'lastname'
        }
      },
    }})     
    
    const buttonEdit = screen.getByTestId('Edit Name')
    
    const handleEdit = jest.fn()
    buttonEdit.addEventListener('click', handleEdit)     

    fireEvent.click(buttonEdit)
    expect(handleEdit).toHaveBeenCalled()  
    
    const formEdit = screen.getByTestId('form-edit-name')
    expect(formEdit).toBeInTheDocument()

    const formEditFirstname = screen.getByLabelText('Firstname')
    const formEditLastname = screen.getByLabelText('Lastname')

    const handleChange = jest.fn()

    formEditFirstname.addEventListener('change', handleChange) 
    formEditLastname.addEventListener('change', handleChange)  

    fireEvent.change(formEditFirstname, {target: {value: 'Test'}})
    fireEvent.change(formEditLastname, {target: {value: 'Test'}})

    expect(handleChange).toHaveBeenCalled()
    
  })
  

  describe('user can edit his name and cancel', () => {
    test('it can cancel with Escape Key', async () => {
      render(<Profile />, {preloadedState: {
        user: {
          user:{
            firstName: 'firstname',
            lastName: 'lastname'
          }
        },
      }})     
      
      const handleEscape = jest.fn()
      window.addEventListener('keydown', handleEscape)

      const buttonEdit = screen.getByTestId('Edit Name')
      fireEvent.click(buttonEdit)

      const formEdit = screen.getByTestId('form-edit-name')
      expect(formEdit).toBeInTheDocument() 

      fireEvent.keyDown(window, {key:'Escape'})
      expect(handleEscape).toHaveBeenCalled()  
    })

    test('it can cancel with Cancel Button', async () => {
      render(<Profile />, {preloadedState: {
        user: {
          user:{
            firstName: 'firstname',
            lastName: 'lastname'
          }
        },
      }})     
      
      const handleEscape = jest.fn()      

      const buttonEdit = screen.getByTestId('Edit Name')
      fireEvent.click(buttonEdit)

      const formEdit = screen.getByTestId('form-edit-name')
      expect(formEdit).toBeInTheDocument() 

      const buttonCancel = screen.getByTestId('Cancel')
      buttonCancel.addEventListener('click', handleEscape)

      fireEvent.click(buttonCancel)
      expect(handleEscape).toHaveBeenCalled()  
    })
  })

  test('user can edit his name and save data', async () => {
    render(<Profile />, {preloadedState: {
      user: {
        user:{
          firstName: 'firstname',
          lastName: 'lastname'
        }
      },
    }})     
    
    const handleSubmit = jest.fn()      

    const buttonEdit = screen.getByTestId('Edit Name')
    fireEvent.click(buttonEdit)

    const formEdit = screen.getByTestId('form-edit-name')
    expect(formEdit).toBeInTheDocument() 

    const buttonSave = screen.getByTestId('Save Name')
    buttonSave.addEventListener('click', handleSubmit)

    fireEvent.click(buttonSave)
    expect(handleSubmit).toHaveBeenCalled()  
  })


})

