const BaseRepository = require('./BaseRepository');

class PersonalCardRepository extends BaseRepository {
    async getAll() {
        const connection = await this.getConnection();

        const sql = `
        select fullName, birthday, enrollmentDate, position, salary, IC, subdivisiontitle from personalCardWithSub `;
        const [sqlResults] = await connection.query(sql);

        return sqlResults;
    }

    async getAverageSalary() {
        const connection = await this.getConnection();

        const sql = `
            CALL proc3();`;
        const [sqlResults] = await connection.query(sql);

        return sqlResults[0][0]['AVG(salary)'];
    }

    async updateSalary(ic, newSalary) {
        const connection = await this.getConnection();

        const sql = `UPDATE personalCard SET salary=(?) WHERE ic=(?)`;
        const [sqlResults] = await connection.query(sql, [newSalary, ic]);

        return sqlResults;
    }

    async create(object) {
        const connection = await this.getConnection();

        await connection.query('SET FOREIGN_KEY_CHECKS = 0;');

        const enrollmentDateDate = new Date(object.enrollmentDate);

        const sql = `insert into personalCard 
                        (fullName, birthday, enrollmentDate, position, salary, IC, subdivisionNumber) 
                        values (?, ?, ?, ?, ?, ?, ?)`;
        const [result] = await connection.query(sql,
            [
                object.fullName,
                object.birthday,
                enrollmentDateDate,
                object.position,
                object.salary,
                object.ic,
                object.subdivisionNumber
            ]);

        return result;
    }
    async delete(ic) {
        const connection = await this.getConnection();

        const sql = `delete from personalCard where IC = ?`;
        const [result] = await connection.query(sql, [ic]);
        return result;
    }

    async getWorkersBySubdivisionNumber(sbdnumber) {
        const connection = await this.getConnection();

        let sql;

        sql = `TRUNCATE TABLE dividedTable`;
        await connection.query(sql);

        sql = `CALL myСursor(?);`;
        await connection.query(sql, [sbdnumber]);

        sql = `SELECT fname as fullName, position, salary from dividedTable`;
        const [sqlResult] = await connection.query(sql);
        return sqlResult;
    }
}

module.exports = new PersonalCardRepository();
