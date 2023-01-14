const { Router } = require("express");
const router = Router();
const ApplicationError = require('../../logic/errors/ApplicationError');
const businessTripService = require('../../logic/services/businessTripService');


router.post('/create', async (req, res, next) => {
    const {ic, beginning, end} = req.body;
    if(!ic || !beginning || !end) {
        return next(new ApplicationError('one of fields were empty', req, res));
    }

    try {
        const result = await businessTripService.create(ic, beginning, end);
        return res.status(200).json(result);
    } catch (e) {
        return next(e, req, res);
    }
});

router.delete('/delete/:ic', async (req, res, next) => {
    const {ic} = req.params;
    if(!ic) {
        return next(new ApplicationError('one of fields were empty', req, res));
    }

    try {
        const result = await businessTripService.delete(ic);
        return res.status(200).json(result);
    } catch (e) {
        return next(e, req, res);
    }
});

router.get('/getAll', async (req, res, next) => {
    try {
        const result = await businessTripService.getAll();
        return res.json(result);
    } catch (e) {
        return next(e, req, res);
    }
});

module.exports = router;