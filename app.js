const express = require('express')
const app = express()
const port = 3000
const moviesRoutes = require('./routes/movies')

app.use(moviesRoutes)


app.use('static', express.static('public'))


app.use(express.json()) /* body parser */

app.get('/', (req, res) => {
  res.send('I film, quelli belli')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})