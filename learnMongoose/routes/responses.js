var express = require('express');
var router = express.Router();

const repsonse_controller = require('../controllers/responseController');

/* GET users listing. */
router.get('/', repsonse_controller.response_list);

router.get('/:key', repsonse_controller.response_details);

module.exports = router;
