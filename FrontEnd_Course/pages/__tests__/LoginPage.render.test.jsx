import { render, screen, fireEvent } from '@testing-library/react'
import LoginPage from '../login-page'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../AuthContext'
import { describe, it, expect } from 'vitest'

describe('LoginPage render', () => {
  it('toont email, wachtwoord velden, login knop en links', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <LoginPage />
        </AuthProvider>
      </BrowserRouter>
    )

    expect(screen.getByLabelText(/email/i)).toBeDefined()
    expect(screen.getByLabelText(/password/i)).toBeDefined()
    expect(screen.getByRole('button', { name: /log in/i })).toBeDefined()
    expect(screen.getByText(/forgot password\?/i)).toBeDefined()
    expect(screen.getByText(/don't have an account\?/i)).toBeDefined()
  })
})
