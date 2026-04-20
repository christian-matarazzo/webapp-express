const express = require('express')
const router = express.Router()
const moviesControllers = require('../controllers/moviesControllers')

router.get('/movies', moviesControllers.index)


module.exports = router