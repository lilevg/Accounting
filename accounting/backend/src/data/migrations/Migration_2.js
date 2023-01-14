const BaseMigration = require("./BaseMigration");

class Migration_2 extends BaseMigration {
  constructor(connection) {
    super(connection);
  }

  async apply() {
    await this.initializePersonalCards();
    await this.initializeBusinessTrips();
    await this.initializeSickLists();
    await this.initializeSubdivisions();
  }

  async initializeBusinessTrips() {
    const values = await this._connection.query('select * from businessTrip');

    if (values[0].length) {
      return;
    }

    let sql = `    
        INSERT INTO businessTrip(IC, fullName, begining, end)
        VALUE\t('432156789', 'Margaret Timson', '2021-09-04', '2021-10-01'),
        ('456321789', 'Tim Virhin', '2011-11-13', '2012-09-08');`;

    await this._connection.query(sql);
  }

  async initializeSickLists() {
    const values = await this._connection.query('select * from sickList');

    if (values[0].length) {
      return;
    }

    let sql = `    
        INSERT INTO sickList(IC, fullName, begining, end)
        VALUE\t('569874321', 'Robert Polson', '2018-04-05', '2018-05-06'),
        ('432156789', 'Margaret Timson', '2021-09-04', '2022-01-03');`;

    await this._connection.query(sql);
  }

  async initializeSubdivisions() {
    const values = await this._connection.query('select * from subdivision');

    if (values[0].length) {
      return;
    }

    let sql = `    
        INSERT INTO subdivision(title, status)
        VALUE ('Machine building', 'Important'),
        ('Logistics', 'Important'),
        ('Personal staff', 'Important');`;

    await this._connection.query(sql);
  }

  async initializePersonalCards() {
    const values = await this._connection.query('select * from personalCard');

    if (values[0].length) {
      return;
    }

    let sql = `
        SET FOREIGN_KEY_CHECKS = 0;`;

    await this._connection.query(sql);

    sql = `
        INSERT INTO personalCard(fullName, birthday, enrollmentDate, position, salary, IC, subdivisionNumber)
        VALUE ('Bob Tomson', 1987, '2017-09-06', 'accountant', 3500, '789654321', 1),
        ('Robert Polson', 1945, '2018-04-05', 'technical', 2000, '569874321', 2),
        ('Margaret Timson', 1997, '2021-09-04', 'accountant', 3750, '432156789', 3),
        ('Tim Virhin', 1989, '2011-11-13', 'cook', 2890, '456321789', 3),
        ('Jane Bui', 2000, '2019-07-19', 'engeneer', 3780, '133456789', 1),
        ('Jack Snit', 2001, '2017-08-15', 'driver', 2300, '987654321', 2),
        ('Mary Moss', 1999, '2019-07-09', 'doctor', 4000, '123456789', 3);`;

    await this._connection.query(sql);
  }
}
module.exports = Migration_2;