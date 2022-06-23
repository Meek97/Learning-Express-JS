var express = require('express');
var router = express.Router();

const channel_controller = require('../controllers/channelController');

/* GET users listing. */
router.get('/', channel_controller.channel_list);


module.exports = router;
