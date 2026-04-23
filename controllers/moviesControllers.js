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


/* store,create */

function store(req, res){
    const { id } = req.params  /* recover id */
    const { name, vote, text} = req.body /* recover body */

    /* query creation */
    const sql =
    `INSERT INTO reviews (movie_id, name, vote, text) VALUES (?,?,?,?) `

    /* query execution */
    connection.query(sql, [id, name, vote, text], (err, results) => {
        if (err) return res.status(500).json({error: 'Database query failed'})

            res.status(201).json({
                message: 'Recensione aggiunta con successo',
                id: results.insertId
            })
    })
}

/* destroy */

function destroy(req,res){
    const {id}= req.params
    const sql = "DELETE FROM movies WHERE id = ?"

    connection.query(sql, [id], (err, results) =>{
        if (err) return res.status(500).json({error: "Errore durante l'eliminazione", message:err.message})
        res.sendStatus(204)
    })
}















module.exports = { index, show, store, destroy }