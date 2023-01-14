const personalCardRepository = require('../../data/repositories/personalCardRepository');
const sickListRepository = require('../../data/repositories/sickListRepository');
const businessTripRepository = require("../../data/repositories/businessTripRepository");

class SickListService {

    async getAll() {
        return await sickListRepository.getAll();
    }

    async create(ic, beginning, end) {
        const person = await personalCardRepository.getByIc(ic);
        return await sickListRepository.create({ic, fullName: person.fullName, beginning, end})
    }
    async delete(ic) {
        const result = await sickListRepository.delete(ic);
        return result;
    }
}

module.exports = new SickListService();
