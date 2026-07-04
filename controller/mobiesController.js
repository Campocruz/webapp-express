///////////// IMPORT CONNECTION AT DB ///////////
const connection = require('../database/connection')

///////////// INDEX FUNCTION ///////////
const index = (req, res) => {
  const sql = `SELECT * FROM movies`;
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'database query failed' })
    res.json(results);
  })
}

///////////// SHOW FUNCTION ///////////
const show = (req, res) => {
  const id = parseInt(req.params.id)
  const sql = `SELECT * FROM movies WHERE id = ?`
  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'error db connection' })
    if (results.length === 0) return res.status(404).json({ message: 'not found' })
    const movie = results[0];
    const reviewSql = `SELECT * FROM reviews LEFT JOIN movies ON reviews.movie_id = movies.id WHERE reviews.movie_id = ${id}`
    connection.query(reviewSql, (err, results) => {
      if (err) return res.status(500).json({ error: 'error db connection' })
      if (results.length === 0) return res.status(404).json({ message: 'not found' })
      movie.review = results;
      res.json(movie)
    })
  })
}

///////////// STORE FUNCTION ///////////
const store = (req, res) => {
  res.status(500).json({ message: 'work in progress' })
}

///////////// UPDATE FUNCTION ///////////
const update = (req, res) => {
  res.status(500).json({ message: 'work in progress' })
}

///////////// MODIFY FUNCTION ///////////
const modify = (req, res) => {
  res.status(500).json({ message: 'work in progress' })
}

///////////// DESTROY FUNCTION ///////////
const destroy = (req, res) => {
  res.status(500).json({ message: 'work in progress' })
}

///////////// EXPORT MODULES FUNCTION ///////////
module.exports = { index, show, store, update, modify, destroy }