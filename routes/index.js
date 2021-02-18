var projects = require('../projects.json');

/*
 * GET home page.
 */

 exports.vew = function (req,res) {
 	res.render ('index', data);

 };

 exports.viewAlt = function (req,res) {
 	res.render ('index, data');
 };

exports.view = function(request, response){
  	response.render('index', projects);
};