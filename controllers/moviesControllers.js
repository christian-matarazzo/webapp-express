const connection = require('../database/db')

/* index */

function index(req, res) {
   const sql = 'SELECT * FROM movies'
    connection.query(sql, (err, results) => {
        if (err) throw err
        res.json(results)
    })
    
}

/* to test http://localhost:3000/movies on postman */


/* show */


function show(req, res) {
    const sql = "SELECT * FROM movies JOIN reviews ON movies.id = reviews.movie_id WHERE movies.id = ?"
    connection.query(sql, [req.params.id], (err, results) => {
        if (err) throw err
        res.json(results)
    })
}

/* to test http://localhost:3000/movies/:id on postman */















module.exports = { index, show }