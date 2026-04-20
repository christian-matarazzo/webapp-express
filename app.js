const express = require('express')
const app = express()
const port = 3000
const moviesRoutes = require('./routes/movies')
const notFound = require('./middleware/notFound')
const errorsHandler = require('./middleware/errorsHandler')

app.use(express.json()) /* body parser */
app.use(moviesRoutes)
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.send('I film, quelli belli')
})


app.use(notFound)
app.use(errorsHandler)
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})