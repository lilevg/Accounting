const config = require('./config');
const app = require('./app');
const dbContext = require('./data/dbContext');
const port = config.applicationPort;

const personalCardRepository = require('./data/repositories/personalCardRepository');


start();

async function start() {
    await dbContext.dropAllTables();
    await dbContext.applyMigrations();

    await personalCardRepository.updateSalary(123456789, 1000);

    app.listen(port, () => {
        console.log(`application started on port ${port}`);
    });
}


