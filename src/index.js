import express from 'express'

const app = express()

app.get('/login', (req, res) => {
  res.send('hello world')
})

app.listen(8081, () => {
  console.log('server started')
})
