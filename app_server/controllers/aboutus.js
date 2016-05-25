/* GET AboutUs page */
module.exports.aboutus = function(req, res) {
	res.render('index', { title: 'About' });
};