import schema from './schema'
import createToken from './create-token'

export function registerApp(app) {
  app.post('/login', (req, res) => {
    const { username, password } = req.body

    res.send({ token: createToken(username, password) })
  })
}

export function addSchema(schemaRegistry) {
  schemaRegistry.add('/login', schema)
}
