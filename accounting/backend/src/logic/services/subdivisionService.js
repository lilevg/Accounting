const subdivisionRepository = require('../../data/repositories/subdivisionRepository');

class SubdivisionService {

    async getAll() {
        return await subdivisionRepository.getAll();
    }

}

module.exports = new SubdivisionService();
