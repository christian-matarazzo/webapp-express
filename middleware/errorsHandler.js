function errorsHandler(err, req, res, next) {
    res.status(500)
    res.json ({
        error: "Internal Server Error",
        message: "Errore interno del server"
    })
}

module.exports = errorsHandler