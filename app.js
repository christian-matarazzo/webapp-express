const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const moviesRoutes = require('./routes/movies')
const notFound = require('./middleware/notFound')
const errorsHandler = require('./middleware/errorsHandler')

app.use(cors()) /* CORS una volta installato evita problemi di sicurezza del browser con chiamate sulla stessa macchina */
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