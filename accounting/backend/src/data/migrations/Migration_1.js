const BaseMigration = require("./BaseMigration");

class Migration_1 extends BaseMigration {
  constructor(connection) {
    super(connection);
  }

  async apply() {
    const [tables] = await this._connection.query("show tables");
    if (tables.length) {
      return;
    }

    let sql;

    sql = `
        CREATE TABLE IF NOT EXISTS subdivision (
        number INT NOT NULL AUTO_INCREMENT UNIQUE,
        title VARCHAR(256) NOT NULL UNIQUE,
        status VARCHAR(256),
        PRIMARY KEY (number)
        )  ENGINE=INNODB;`;
    await this._connection.query(sql);

    sql = `
        CREATE TABLE IF NOT EXISTS personalCard (
        personalNumber INT NOT NULL AUTO_INCREMENT UNIQUE,
        fullName VARCHAR(256),
        birthday YEAR NOT NULL,
        enrollmentDate DATE NOT NULL,
        position VARCHAR(256) NOT NULL,
        salary FLOAT NOT NULL,
        IC VARCHAR(256) NOT NULL UNIQUE,
        subdivisionNumber INT NOT NULL,
        PRIMARY KEY (IC),
        FOREIGN KEY (subdivisionNumber) REFERENCES subdivision(number)
        )  ENGINE=INNODB;`;
    await this._connection.query(sql);


    sql = `  
        CREATE TABLE IF NOT EXISTS businessTrip(
        IC VARCHAR(256) NOT NULL UNIQUE,
        fullName VARCHAR(256) NOT NULL,
        begining DATE NOT NULL,
        end DATE NOT NULL,
        PRIMARY KEY (IC),
        FOREIGN KEY(IC) REFERENCES personalCard(IC) ON DELETE CASCADE
        )  ENGINE=INNODB;`;
    await this._connection.query(sql);

    sql = `
        CREATE TABLE IF NOT EXISTS sickList (
        IC VARCHAR(256) NOT NULL UNIQUE,
        fullName VARCHAR(256) NOT NULL,
        begining DATE NOT NULL,
        end DATE NOT NULL,
        PRIMARY KEY (IC),
        FOREIGN KEY(IC) REFERENCES personalCard(IC) ON DELETE CASCADE
        )  ENGINE=INNODB;`;
    await this._connection.query(sql);


  }
}

module.exports = Migration_1;
