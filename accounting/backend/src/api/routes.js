const { Router } = require("express");
const router = Router();
const businessTripController = require('../api/controllers/businessTripController');
const personalCardController = require('../api/controllers/personalCardController');
const sickListController = require('../api/controllers/sickListController');
const subdivisionController = require('../api/controllers/subdivisonController');
const salaryStoryController = require('../api/controllers/salaryStoryController');

router.use('/businessTrip', businessTripController);
router.use('/personalCard', personalCardController);
router.use('/sickList', sickListController);
router.use('/subdivision', subdivisionController);
router.use('/salaryStory', salaryStoryController);

module.exports = router;
