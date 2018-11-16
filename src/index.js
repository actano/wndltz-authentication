import express from 'express'
import bodyParser from 'body-parser'
import validator from 'swagger-express-validator'
import swaggerUi from 'swagger-ui-express'
import util from 'util'

import schema from './swagger'
import * as Login from './login'
import * as ValidateToken from './validate-token'
import * as PublicKey from './public-key'
import { JWT_PUBLIC_KEY } from './keys'

const schemaRegistry = {
  add(path, s) {
    schema.paths[path] = s
  }
}

const apis = [
  Login,
  ValidateToken,
  PublicKey,
]

apis.forEach((api) => {
  api.addSchema(schemaRegistry)
})

const app = express()

app.use(bodyParser.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(schema))
app.use(validator({
  schema,
  validateRequest: true,
  validateResponse: false,
}))

apis.forEach((api) => {
  api.registerApp(app)
})

app.listen(8081, () => {
  console.log('server started')
})
