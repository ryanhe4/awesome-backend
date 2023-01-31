import bcrypt from 'bcrypt'

const saltRound = 10

class Crypter {
  async hash(value: string) {
    const result = await bcrypt.hash(value, saltRound)
    return result
  }

  async compare(value: string, hashed: string) {
    return await bcrypt.compare(value, hashed)
  }
}

const crypter = new Crypter()

export default crypter
