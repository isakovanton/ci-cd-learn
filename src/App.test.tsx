import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the starter screen', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /ci\/cd practice/i }),
    ).toBeInTheDocument()
  })

  it('increments the counter', () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /count is 0/i })
    fireEvent.click(button)

    expect(
      screen.getByRole('button', { name: /count is 1/i }),
    ).toBeInTheDocument()
  })
})
