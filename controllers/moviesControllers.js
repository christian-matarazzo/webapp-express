const connection = require('../database/db')

/* index */

function index(req, res) {
   const sql = 'SELECT * FROM movies'
    connection.query(sql, (err, results) => {
        if (err) throw err
        res.json(results)
    })
}


/* show */


function show(req, res) {
    const sql = 'SELECT * FROM movies WHERE id = ?'
    connection.query(sql, [req.params.id], (err, results) => {
        if (err) throw err
        res.json(results)
    })
}















module.exports = { index, show }