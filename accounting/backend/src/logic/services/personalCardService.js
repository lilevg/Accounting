const personalCardRepository = require('../../data/repositories/personalCardRepository');

class PersonalCardService {

    async getAll() {
        return await personalCardRepository.getAll();
    }

    async getAverageSalary(){
        return await personalCardRepository.getAverageSalary();
    }

    async getWorkersBySubdivisionNumber(sbdnumber){
        return await personalCardRepository.getWorkersBySubdivisionNumber(sbdnumber);
    }

    async updateSalary(ic, newSalary) {
        return await personalCardRepository.updateSalary(ic, newSalary);
    }

    async create(fullName, birthday, enrollmentDate, position, salary, ic, subdivisionNumber) {
        return await personalCardRepository.create({
            fullName,
            birthday,
            enrollmentDate,
            position,
            salary,
            ic,
            subdivisionNumber
        });
    }

    async delete(ic) {
        const result = await personalCardRepository.delete(ic);
        return result;
    }
}

module.exports = new PersonalCardService();
