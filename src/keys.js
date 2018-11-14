import fs from 'fs'

export const JWT_PRIVATE_KEY = fs.readFileSync('auth')

export const JWT_PUBLIC_KEY = fs.readFileSync('auth.pub')
