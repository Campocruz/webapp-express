const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

const mobiesRouter = require('./router/mobiesRouter')


app.get('/', (req, res) => {
  res.json({
    messaggio: "Server del mio Blog"
  })
})

app.use('/api/v1/mobies', mobiesRouter)

app.listen(port, () => {
  console.log(`Server listening http://localhost:${port}`);
})