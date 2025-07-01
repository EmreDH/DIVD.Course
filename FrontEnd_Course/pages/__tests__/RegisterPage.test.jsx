import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import RegisterPage from '../registerpage'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../AuthContext'

describe('RegisterPage', () => {
  it('verifieert dat registratieformulier werkt tot stap 2', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <RegisterPage />
        </AuthProvider>
      </BrowserRouter>
    )

    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Batu' } })
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Yilmaz' } })
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'batu@test.com' } })

    fireEvent.click(screen.getByText(/Continue/i))

    // check dat de velden voor password zichtbaar zijn door te checken of ze bestaan
    const passwordInput = screen.queryByLabelText('Password')
    const confirmPasswordInput = screen.queryByLabelText('Confirm Password')

    expect(passwordInput).toBeTruthy()
    expect(confirmPasswordInput).toBeTruthy()
  })
})
