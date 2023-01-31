import bcrypt from 'bcrypt'

const salt = "&z[J%HqUa6sM'wc}"

class Crypter {
  async hash(value: string) {
    const result = await bcrypt.hash(value, salt)
    return result
  }

  async compare(value: string, hashed: string) {
    return await bcrypt.compare(value, hashed)
  }
}

const crypter = new Crypter()

export default crypter
