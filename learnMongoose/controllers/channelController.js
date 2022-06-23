const Channel = require('../models/channel')


exports.index = function(request,response){
	response.send('[Not Implemented]: Channels Index')
};
exports.channel_list = function(request,response, next) {
	Channel.find({})
		.sort({name:1})
		.exec(function(err, list_channels){
			if(err)
				return next(err);
			response.render('channel_list',{channel_list: list_channels})
		});
};
exports.channel_details = function(request,response) {
	response.send('[Not Implemented]: Channel Details: ' + request.params.id);
};
exports.channel_create_get = function(request,response) {
	response.send('[Not Implemented]: Channel create GET');
};
exports.channel_create_post = function(request,response) {
	response.send('[Not Implemented]: Channel create POST');
};
exports.channel__delete_get = function(request,response) {
	response.send('[Not Implemented]: Channel delete GET');
};
exports.channel__delete_post = function(request,response) {
	response.send('[Not Implemented]: Channel delete POST');
};
exports.channel__update_get = function(request,response) {
	response.send('[Not Implemented]: Channel update GET');
};
exports.channel__update_post = function(request,response) {
	response.send('[Not Implemented]: Channel update POST');
};