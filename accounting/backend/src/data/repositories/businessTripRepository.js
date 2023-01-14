const BaseRepository = require('./BaseRepository');

class BusinessTripRepository extends BaseRepository {

  async getAll() {
    const connection = await this.getConnection();

    const sql = `
      select IC, fullName, begining, end from businessTrip `;
    const [sqlResults] = await connection.query(sql);

    return sqlResults;
  }

  async create(object) {
    const connection = await this.getConnection();
    const beginningDate = new Date(object.beginning);
    const endDate = new Date(object.end);

    const sql = `insert into businessTrip (IC, fullName, begining, end) values (?, ?, ?, ?)`;
    const [result] = await connection.query(sql, [object.ic, object.fullName, beginningDate, endDate]);

    return result;
  }

  async update(object) {
    const connection = await this.getConnection();

    const sql = `update businessTrip set fullName = ?, begining = ?, end = ? where IC = ?`;
    const [result] = await connection.query(sql, [object.fullName, object.beginning, object.end, object.ic]);
    return result;
  }

  async delete(ic) {
    const connection = await this.getConnection();

    const sql = `delete from businessTrip where IC = ?`;
    const [result] = await connection.query(sql, [ic]);
    return result;
  }
}

module.exports = new BusinessTripRepository();
