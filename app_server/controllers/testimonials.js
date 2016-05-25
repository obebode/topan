/* GET testimonials page */
module.exports.testimonials = function(req, res) {
	res.render('index', { title: 'Testimonials' });
};