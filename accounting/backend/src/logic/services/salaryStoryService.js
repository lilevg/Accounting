const salaryStoryService = require('../../data/repositories/salaryStoryRepository');

class SalaryStoryService {

    async getAll() {
        return await salaryStoryService.getAll();
    }
}

module.exports = new SalaryStoryService();
