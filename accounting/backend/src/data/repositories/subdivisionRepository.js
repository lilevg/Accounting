const BaseRepository = require('./BaseRepository');

class SubdivisionRepository extends BaseRepository {
    async getAll() {
        const connection = await this.getConnection();

        const sql = `
        select number, title from subdivision `;
        const [sqlResults] = await connection.query(sql);

        return sqlResults;
    }
}

module.exports = new SubdivisionRepository();
