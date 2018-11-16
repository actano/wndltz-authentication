import jwt from 'jsonwebtoken'
import { JWT_PRIVATE_KEY } from '../keys'

export default function createToken(username, password) {
  const options = {
    algorithm: 'RS512',
  }
  return jwt.sign(
    { username },
    JWT_PRIVATE_KEY,
    options,
  )
}
