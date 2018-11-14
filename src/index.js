import express from 'express'
import bodyParser from 'body-parser'
import createToken from './create-token'
import validateToken from './validate-token'

const app = express()

app.use(bodyParser.json())

app.post('/login', (req, res) => {
  const { username, password } = req.body

  res.send({ token: createToken(username, password) })
})

app.post('/validate-token', (req, res) => {
  const { token } = req.body

  const isValid = validateToken(token)

  res.send({ isValid })
})

app.listen(8081, () => {
  console.log('server started')
})
