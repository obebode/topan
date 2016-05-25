/* GET achievements page */
module.exports.achievements = function(req, res) {
	res.render('index', { title: 'Achievements' });
};