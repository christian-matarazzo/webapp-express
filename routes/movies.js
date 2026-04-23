const express = require('express')
const router = express.Router()
const moviesControllers = require('../controllers/moviesControllers')

router.get('/movies', moviesControllers.index)
router.get('/movies/:id', moviesControllers.show)
router.post('/movies/:id/reviews', moviesControllers.store);
router.delete('/movies/:id', moviesControllers.destroy)

module.exports = router