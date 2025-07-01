import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import LoginPage from '../login-page'
import { BrowserRouter } from 'react-router-dom'
import * as AuthContext from '../AuthContext'
import { vi, describe, it, expect, beforeEach } from 'vitest'

// Partial mock van react-router-dom:
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom') // haal originele module
  return {
    ...actual,              // alles van origineel meenemen
    useNavigate: () => navigateMock, // override useNavigate
  }
})

const navigateMock = vi.fn()

// Mock AuthContext:
vi.mock('../AuthContext', () => ({
  useAuth: vi.fn(),
}))

describe('LoginPage submit', () => {
  let fetchMock
  let loginMock

  beforeEach(() => {
    fetchMock = vi.fn()
    global.fetch = fetchMock

    loginMock = vi.fn()
    AuthContext.useAuth.mockReturnValue({
      login: loginMock,
    })

    navigateMock.mockClear()
  })

  it('stuurt login data, roept login aan en navigeert bij succes', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
    })

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    )

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@test.com' } })
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'Password123!' } })

    fireEvent.click(screen.getByRole('button', { name: /log in/i }))

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        'http://localhost:5206/api/auth/login',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: 'test@test.com', password: 'Password123!' }),
        })
      )
    })

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalled()
      expect(navigateMock).toHaveBeenCalledWith('/')
    })
  })
})
