const { Router } = require("express");
const router = Router();
const salaryStoryService = require('../../logic/services/salaryStoryService')


router.get('/getAll', async (req, res, next) => {
    try {
        const result = await salaryStoryService.getAll();
        return res.json(result);
    } catch (e) {
        return next(e, req, res);
    }
});


module.exports = router;