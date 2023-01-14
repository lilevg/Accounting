const BaseRepository = require('./BaseRepository');

class SalaryStoryRepository extends BaseRepository {
    async getAll() {
        const connection = await this.getConnection();

        const sql = `
        select IC, oldSalary, newSalary, date from logsalary`;
        const [sqlResults] = await connection.query(sql);

        return sqlResults;
    }
}

module.exports = new SalaryStoryRepository();
