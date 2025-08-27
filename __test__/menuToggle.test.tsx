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

describe('Menu Toggle Test', () => {
  it('should open and close menu on button click', () => {
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
    const button = screen.getByTestId('menu-button')
    expect(button).toBeInTheDocument()
    // Initial state
    expect(screen.queryByTestId('navigation-menu')).not.toHaveClass(
      'translate-x-0'
    )
    // Open menu
    act(() => {
      button.click()
    })
    expect(screen.getByTestId('navigation-menu')).toHaveClass('translate-x-0')
    // Close menu
    act(() => {
      button.click()
    })
    expect(screen.queryByTestId('navigation-menu')).not.toHaveClass(
      'translate-x-0'
    )
  })
})
