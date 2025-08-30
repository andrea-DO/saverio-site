import { describe, it, expect } from 'vitest'
import { formatDateRange, classNames } from '../src/lib/utils'

describe('utils', () => {
  it('formatDateRange', () => {
    expect(formatDateRange('2020', '2021')).toBe('2020 – 2021')
    expect(formatDateRange('2020')).toBe('2020 – Present')
    expect(formatDateRange(undefined, '2021')).toBe('2021')
    expect(formatDateRange()).toBe('')
  })

  it('classNames', () => {
    expect(classNames('a', false && 'b', 'c')).toBe('a c')
  })
})
