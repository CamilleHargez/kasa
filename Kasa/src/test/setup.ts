import '@testing-library/jest-dom'

// Mock pour les imports d'images
vi.mock('@/assets/arrow_top.png', () => ({
  default: '/mock-arrow.png'
}))