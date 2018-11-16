import validateToken from './validate'
import schema from './schema'

export function registerApp(app) {
  app.post('/validate-token', (req, res) => {
    const { token } = req.body

    const isValid = validateToken(token)

    res.send({ isValid })
  })
}

export function addSchema(schemaRegistry) {
  schemaRegistry.add('/validate-token', schema)
}
