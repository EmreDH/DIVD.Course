// pages/__tests__/RegisterPage.api.test.jsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import RegisterPage from '../registerpage'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../AuthContext'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'

describe('RegisterPage API submit', () => {
  let fetchMock
  let originalLocation

  beforeEach(() => {
    fetchMock = vi.fn()
    global.fetch = fetchMock

    // Bewaar originele window.location
    originalLocation = window.location

    // Vervang window.location tijdelijk door een object met setter voor href
    delete window.location
    window.location = {
      ...originalLocation,
      href: '',
      assign: vi.fn((url) => { window.location.href = url }),
    }
  })

  afterEach(() => {
    // Herstel originele window.location na test
    window.location = originalLocation
    vi.restoreAllMocks()
  })

  it('stuurt correcte data naar API bij submit en handelt redirect af', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
    })

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

    fireEvent.click(screen.getByRole('button', { name: /Continue/i }))

    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'Password123!' } })
    fireEvent.change(screen.getByLabelText('Confirm Password'), { target: { value: 'Password123!' } })

    fireEvent.click(screen.getByRole('checkbox', { name: /terms/i }))

    fireEvent.click(screen.getByRole('button', { name: /Create Account/i }))

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledOnce()
      expect(fetchMock).toHaveBeenCalledWith(
        'http://localhost:5206/api/auth/register',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: 'Batu Yilmaz',
            email: 'batu@test.com',
            password: 'Password123!',
          }),
        })
      )
    })

    await waitFor(() => {
      expect(window.location.href).toBe('/login')
    })
  })
})
