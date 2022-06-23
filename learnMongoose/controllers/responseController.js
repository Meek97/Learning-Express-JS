const Response = require('../models/response');


exports.index = function(request,response){
	response.send('[Not Implemented]: Response Index')
};
exports.response_list = function(request,response,next){
	Response.find({})
		.sort({key:1})
		.exec(function(err, list_responses){
			if(err)
				next(err);
			response.render('response_list',{response_list: list_responses});
		});
};
exports.response_details = function(request,response) {
	Response.findOne({key: request.params.key})
		.exec(function(err, _response){
			if(err)
				next(err);
			response.render('response_details',{response: _response});
		});
	// response.send('[Not Implemented]: Response Details: ' + request.params.key);
};
exports.response_create_get = function(request,response) {
	response.send('[Not Implemented]: Response create GET');
};
exports.response_create_post = function(request,response) {
	response.send('[Not Implemented]: Response create POST');
};
exports.response__delete_get = function(request,response) {
	response.send('[Not Implemented]: Response delete GET');
};
exports.response__delete_post = function(request,response) {
	response.send('[Not Implemented]: Response delete POST');
};
exports.response__update_get = function(request,response) {
	response.send('[Not Implemented]: Response update GET');
};
exports.response__update_post = function(request,response) {
	response.send('[Not Implemented]: Response update POST');
};