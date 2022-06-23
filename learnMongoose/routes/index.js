const express = require('express');
const router = express.Router();

const channel_controller = require('../controllers/channelController');

var AllChannels, AllResponses;

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index',{ channels: AllChannels, responses: AllResponses});
});



module.exports = router;
