const { Router } = require("express");
const router = Router();
const subdivisionService = require('../../logic/services/subdivisionService');


router.get('/getAll', async (req, res, next) => {
    try {
        const result = await subdivisionService.getAll();
        return res.json(result);
    } catch (e) {
        return next(e, req, res);
    }
});

module.exports = router;