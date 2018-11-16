import { JWT_PUBLIC_KEY } from '../keys'
import schema from './schema'

export function registerApp(app) {
  app.get('/public-key', (req, res) => {
    res.set('Content-Type', 'text/plain')
    res.send(JWT_PUBLIC_KEY)
  })
}

export function addSchema(schemaRegistry) {
  schemaRegistry.add('/public-key', schema)
}
