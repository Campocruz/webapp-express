const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

const connection = require('./database/connection')

app.get('/', (req, res) => {
  res.json({
    messaggio: "Server del mio Blog"
  })
})


app.listen(port, () => {
  console.log(`Server listening http://localhost:${port}`);
})