import { describe, it, expect } from 'vitest'
import { profile } from '../src/data/profile'

describe('profile data', () => {
  it('has name and at least one service', () => {
    expect(profile.name).toBeTruthy()
    expect(profile.services.length).toBeGreaterThan(0)
  })
})
