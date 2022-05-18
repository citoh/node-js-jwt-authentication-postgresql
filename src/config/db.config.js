const env = require('../../env')

const DatabaseConfig = {
    dialect : env.db.dialect || 'postgres',
    host :    env.db.host    || 'localhost',
    username: env.db.user    || '',
    password: env.db.pass    || null,
    database: env.db.name    || 'database',
    poll: env.db.pool        || {},
    logging: console.log,
    define:{
        timestamps: true,
        underscored: true,
    }
}
module.exports = DatabaseConfig