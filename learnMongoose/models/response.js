const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ResponseSchema = new Schema({
	_id: Schema.Types.ObjectID,
	key: String,
	submissions: [{
		response: String,
		author: String
	}]
});
module.exports = mongoose.model('Response', ResponseSchema);