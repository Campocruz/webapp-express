/*
////////////////////////////////////////
///////////// IMPORT SECTION ///////////
////////////////////////////////////////
*/
const express = require('express');
const router = express.Router();

///////////// IMPORT CONTROLLER ///////////
const mobiesController = require('../controller/mobiesController')

///////////// USE CONTROLLER ///////////
router.get('/', mobiesController.index);
router.get('/:id', mobiesController.show);

// Add STORE route for add a review
router.post('/:id/reviews', mobiesController.storeReview)

///////////// EXPORT MODULE ///////////
module.exports = router;