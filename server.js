const express = require('express');
const app = express();
const port = 3000;

const mobiesRouter = require('./router/mobiesRouter')
const errorServer = require('./middleware/errorServer')
const notFound = require('./middleware/notFound')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.json({
    messaggio: "Server del mio Blog"
  })
})

app.use('/api/v1/mobies', mobiesRouter)

app.use(errorServer)

app.use(notFound)

app.listen(port, () => {
  console.log(`Server listening http://localhost:${port}`);
})