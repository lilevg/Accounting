const BaseMigration = require("./BaseMigration");

class Migration_3 extends BaseMigration {
    constructor(connection) {
        super(connection);
    }

    async apply() {
        await this.createView();
        await this.createStoredProcedure();
        await this.createTrigger();
        await this.createCursor();
    }

    async createView() {
        let sql =
            `CREATE VIEW personalCardWithSub AS 
          SELECT personalNumber, fullName, birthday, enrollmentDate, position, salary, IC, subdivision.title as subdivisiontitle
          FROM personalCard JOIN subdivision ON personalCard.subdivisionNumber = subdivision.number`;
        await this._connection.query(sql);
    }

    async createStoredProcedure() {
        let sql =
            `CREATE PROCEDURE proc3()
             BEGIN
            SELECT AVG(salary) FROM personalCard;
            END`;
        await this._connection.query(sql);
    }

    async createTrigger() {
        let sql =
            `CREATE TRIGGER logSalaryChange AFTER UPDATE
             ON personalCard
             FOR EACH ROW
             BEGIN
                IF OLD.salary <> NEW.salary THEN
                    INSERT INTO logSalary(IC, oldSalary, newSalary, date)
                    VALUES (old.IC, old.salary, new.salary, NOW());
                END IF;
             END`;
        await this._connection.query(sql);

        sql = `
        CREATE TABLE logSalary (IC VARCHAR(256), oldSalary FLOAT, newSalary FLOAT, date DATE)`;
        await this._connection.query(sql);
    }

    async createCursor() {
        let sql = `CREATE TABLE dividedTable (fname varchar(50), position varchar(50), salary varchar(50))`;
        await this._connection.query(sql);

        sql =
           `CREATE PROCEDURE myСursor(IN sbdnumber INT)
            READS SQL DATA
            BEGIN
            DECLARE done INT DEFAULT FALSE;
            DECLARE FN VARCHAR(50);
            DECLARE P  VARCHAR(50);
            DECLARE S  FLOAT;
            DECLARE mycursor CURSOR FOR 
                SELECT fullName, position, salary
                FROM personalCard where subdivisionNumber = sbdnumber;
                DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
                open mycursor;
                    getWorkers: LOOP
                        FETCH mycursor INTO FN, P, S;
                        IF done THEN
                            LEAVE getWorkers;
                        END IF;
                        INSERT INTO dividedTable(fname, position, salary) VALUE (FN, P, S);
                    END LOOP getWorkers;
                CLOSE mycursor;
            END`;
        await this._connection.query(sql);
    }

}
module.exports = Migration_3;