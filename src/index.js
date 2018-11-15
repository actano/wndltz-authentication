import express from 'express'
import bodyParser from 'body-parser'
import validator from 'swagger-express-validator'
import swaggerUi from 'swagger-ui-express'
import util from 'util'

import schema from './swagger'
import createToken from './create-token'
import validateToken from './validate-token'
import { JWT_PUBLIC_KEY } from './keys'

const app = express()

app.use(bodyParser.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(schema))
app.use(validator({
  schema,
  validateRequest: true,
  validateResponse: true,
}))

app.post('/login', (req, res) => {
  const { username, password } = req.body

  res.send({ token: createToken(username, password) })
})

app.post('/validate-token', (req, res) => {
  const { token } = req.body

  const isValid = validateToken(token)

  res.send({ isValid })
})

app.get('/public-key', (req, res) => {
  res.send(JWT_PUBLIC_KEY)
})

app.listen(8081, () => {
  console.log('server started')
})
