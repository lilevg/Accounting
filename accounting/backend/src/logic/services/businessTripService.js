const businessTripRepository = require('../../data/repositories/businessTripRepository');
const personalCardRepository = require('../../data/repositories/personalCardRepository');

class BusinessTripService {

    async getAll() {
        return await businessTripRepository.getAll();
    }

    async create(ic, beginning, end) {
        const person = await personalCardRepository.getByIc(ic);
        return await businessTripRepository.create({ic, fullName: person.fullName, beginning, end})
    }

    async delete(ic) {
        const result = await businessTripRepository.delete(ic);
        return result;
    }
}

module.exports = new BusinessTripService();
