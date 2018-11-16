import jwt from 'jsonwebtoken'
import { JWT_PUBLIC_KEY } from '../keys'

export default function validateToken(token) {
  try {
    jwt.verify(token, JWT_PUBLIC_KEY)
    return true
  } catch (e) {
    return false
  }
}
