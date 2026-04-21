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
    const id = req.params.id;

    const sqlMovie = "SELECT * FROM movies WHERE id = ?";
    
    connection.query(sqlMovie, [id], (err, movieResults) => {
        if (err) return res.status(500).json({ error: err.message });
        if (movieResults.length === 0) return res.status(404).json({ error: "Film non trovato" });

        const movie = movieResults[0];

        const sqlReviews = "SELECT * FROM reviews WHERE movie_id = ?";
        
        connection.query(sqlReviews, [id], (err, reviewResults) => {
            if (err) return res.status(500).json({ error: err.message });

            movie.reviews = reviewResults;

            res.json(movie);
        });
    });
}

/* to test http://localhost:3000/movies/:id on postman */















module.exports = { index, show }