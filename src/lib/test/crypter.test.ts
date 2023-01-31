import crypter from '../crypter'

describe('crypter', () => {
  it('compare true', async () => {
    const hashed = await crypter.compare(
      'password',
      '$2b$10$1MYmFmAjQAPEF5M/ulwL8u5fWA4/0wFFQWa286J/DvsNhH4SeGy7i'
    )
    expect(hashed).toBe(true)
  })

  it('compare false', async () => {
    const hashed = await crypter.compare(
      'password2',
      '$2b$10$1MYmFmAjQAPEF5M/ulwL8u5fWA4/0wFFQWa286J/DvsNhH4SeGy7i'
    )
    expect(hashed).toBe(false)
  })
})
