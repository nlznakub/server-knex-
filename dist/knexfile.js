'use strict';

module.exports = {
    development: {
        client: 'mysql', // type database
        connection: {
            user: 'root', // username
            password: 'waterfire', // password
            database: 'knex' // database name
        },
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci'
        },
        migrations: {
            directory: __dirname + '/knex/migrations' // directory migrations
        },
        seeds: {
            directory: __dirname + '/knex/seeds' // directory seeds
        }
    }
};