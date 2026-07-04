
const connection = require('../database/connection')

// Index arrow function 
const index = (req, res) => {
  const sql = `SELECT * FROM movies`;
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'database query failed' })
    res.json(results);
  })
}

const show = (req, res) => {
  const id = parseInt(req.params.id)
  const sql = `SELECT * FROM movies WHERE id = ?`
  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'error db connection' })
    if (results.length === 0) return res.status(404).json({ message: 'not found' })
    res.json(results[0])
  })
}

const store = (req, res) => {

}

const update = (req, res) => {

}


const modify = (req, res) => {


}


const destroy = (req, res) => {

}

module.exports = { index, show, store, update, modify, destroy }