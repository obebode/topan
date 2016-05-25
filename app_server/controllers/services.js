/* GET services page */
module.exports.services = function(req, res) {
	res.render('index', { title: 'Services' });
};