/*
////////////////////////////////////////
///////////// IMPORT SECTION ///////////
////////////////////////////////////////
*/
const express = require('express');
const app = express();
const port = 3000;

///////////// IMPORT ROUTER ///////////
const mobiesRouter = require('./router/mobiesRouter')
///////////// IMPORT MIDDLEWARE //////
const errorServer = require('./middleware/errorServer')
const notFound = require('./middleware/notFound')

///////////// USE STATIC ASSET ///////
app.use('/static/images', express.static('public/img'))

///////////// GET FUNCION "/" ///////
app.get('/', (req, res) => {
  res.json({
    messaggio: "Server del mio Blog"
  })
})

///////////// USE ROUTER AT "/API/V1/MOBIES" ///////
app.use('/api/v1/mobies', mobiesRouter)

///////////// USE MIDDLEWARE ERROR SERVER ///////
app.use(errorServer)

///////////// USE MIDDLEWARE NOT FOUND ///////
app.use(notFound)

///////////// SERVER LISTEN ///////
app.listen(port, () => {
  console.log(`Server listening http://localhost:${port}`);
})