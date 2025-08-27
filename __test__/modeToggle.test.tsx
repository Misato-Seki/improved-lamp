import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NavBar from '@/app/components/NavBar'
import { DarkModeProvider } from '@/app/components/DarkModeContext'
import { act } from 'react'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
  usePathname: jest.fn(() => '/'),
}))

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

describe('Mode Toggle Test', () => {
  it('initially light mode when OS is light', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))

    render(
      <DarkModeProvider>
        <NavBar />
      </DarkModeProvider>
    )

    const button = screen.getByTestId('mode-toggle')
    // Initial state
    expect(document.body).toHaveStyle('--background: #ffffff')
    // Toggle to dark mode
    act(() => {
      button.click()
    })
    expect(document.body).toHaveStyle('--background: #1D1D1D')
    // Toggle back to light mode
    act(() => {
      button.click()
    })
    expect(document.body).toHaveStyle('--background: #ffffff')
  })
  it('initially dark mode when OS is dark', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))

    render(
      <DarkModeProvider>
        <NavBar />
      </DarkModeProvider>
    )

    const button = screen.getByTestId('mode-toggle')
    // Initial state
    expect(document.body).toHaveStyle('--background: #1D1D1D')
    // Toggle to light mode
    act(() => {
      button.click()
    })
    expect(document.body).toHaveStyle('--background: #ffffff')
    // Toggle back to dark mode
    act(() => {
      button.click()
    })
    expect(document.body).toHaveStyle('--background: #1D1D1D')
  })
})
