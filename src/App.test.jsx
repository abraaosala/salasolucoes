import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import App from './App.jsx'

describe('Landing Sala Soluções', () => {
  test('renderiza a landing sem erros', () => {
    render(<App />)
    expect(screen.getAllByAltText(/sala soluções/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/peça orçamento/i).length).toBeGreaterThan(0)
  })
})
