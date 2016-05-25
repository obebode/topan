var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main'); 

var ctrAboutUs = require('../controllers/aboutus');
var ctrAchievement = require('../controllers/achievements')
var ctrServices = require('../controllers/services');
var ctrTestimonials = require('../controllers/testimonials');


/* topan pages */
router.get('/aboutus', ctrAboutUs.aboutus);
router.get('/achievements', ctrAchievement.achievements);
router.get('/services', ctrServices.services);
router.get('/testimonials', ctrTestimonials.testimonials);



router.get('/', ctrlMain.index); 

module.exports = router;
