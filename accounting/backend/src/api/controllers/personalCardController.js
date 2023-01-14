const { Router } = require("express");
const router = Router();
const personalCardService = require('../../logic/services/personalCardService');
const ApplicationError = require('../../logic/errors/ApplicationError');
const businessTripService = require('../../logic/services/businessTripService');


router.get('/getAll', async (req, res, next) => {
    try {
        const result = await personalCardService.getAll();
        return res.json(result);
    } catch (e) {
        return next(e, req, res);
    }
});

router.get('/getAverageSalary', async (req, res, next) => {
    try {
        const result = await personalCardService.getAverageSalary();
        return res.json(result);
    } catch (e) {
        return next(e, req, res);
    }
});

router.get('/getWorkersBySubdivisionNumber/:subdivisionNumber', async (req, res, next) => {
    try {
        const {subdivisionNumber} = req.params;
        const result = await personalCardService.getWorkersBySubdivisionNumber(subdivisionNumber);
        return res.json(result);
    } catch (e) {
        return next(e, req, res);
    }
});

router.post('/updateSalary', async(req,res,next) => {
    try {
        const {ic, newSalary} = req.body;
        const result = await personalCardService.updateSalary(ic, newSalary);
        return res.json(result);
    } catch (e) {
        return next(e, req, res);
    }
});

router.post('/create', async (req, res, next) => {
    const {
        fullName,
        birthday,
        enrollmentDate,
        position,
        salary,
        ic,
        subdivisionNumber
    } = req.body;

    if( !fullName ||
        !birthday ||
        !enrollmentDate ||
        !position ||
        !salary ||
        !ic ||
        !subdivisionNumber) {
            return next(new ApplicationError('one of fields were empty', req, res));
    }

    try {
        const result = await personalCardService.create(fullName,
            birthday,
            enrollmentDate,
            position,
            salary,
            ic,
            subdivisionNumber);
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
        const result = await personalCardService.delete(ic);
        return res.status(200).json(result);
    } catch (e) {
        return next(e, req, res);
    }
});

module.exports = router;